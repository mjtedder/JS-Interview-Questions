// What will the following code output?

(function() {
    return [
      (() => this.value).bind({ value: 'innerValue' })(),
      (() => this.value)()
    ]
  }).call({ value: 'outerValue' });