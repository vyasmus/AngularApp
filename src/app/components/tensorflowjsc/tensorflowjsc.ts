import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import {Parser} from "expr-eval";

@Component({
  selector: 'app-tensorflowjsc',
  imports: [],
  templateUrl: './tensorflowjsc.html',
  styleUrl: './tensorflowjsc.css',
})
export class Tensorflowjsc implements OnInit {

  output = signal<string>("");
  expression = signal<string>("");
  inputNumbersX = signal<number[]>([]);

  ngOnInit() {
    this.runPrediction();
  }

  setInputNumbersX(value: string) {
    this.inputNumbersX.set(value.split(',').map(item => Number(item.trim())));
  }

  runPrediction() {
    // Define a model for linear regression.
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    // Generate some synthetic data for training.
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

    // Train the model using the data.
    model.fit(xs, ys, {epochs: 10}).then(() => {
      // Use the model to do inference on a data point the model hasn't seen before:
      (model.predict(tf.tensor2d([5], [1, 1])) as tf.Tensor).print();
      //(Array.isArray(prediction) ? prediction[0].dataSync : prediction.dataSync());
      // Open the browser devtools to see the output
    });
  }

  runSequentialModelPrediction() {
    // Create a simple model.
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 1, inputShape: [1]}));

    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    // Generate some synthetic data for training. (y = 2x - 1)
    //const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
    const xs = tf.tensor2d(this.inputNumbersX(), [this.inputNumbersX().length, 1]);

    let yValues: number[] = [];
    this.inputNumbersX().forEach(x => {
      const parser = new Parser();
      const expr = parser.parse(this.expression().toString());
      const y = expr.evaluate({x: x});
      yValues.push(y);
    });

    const ys = tf.tensor2d(yValues, [yValues.length, 1]);

    // Train the model using the data.
    model.fit(xs, ys, {epochs: 250});

    // Use the model to do inference on a data point the model hasn't seen.
    // Should print approximately 39.
    const prediction = (model.predict(tf.tensor2d([20], [1, 1])) as tf.Tensor).dataSync();
    console.log(prediction);
    this.output.set(prediction.toString());
  }
}
