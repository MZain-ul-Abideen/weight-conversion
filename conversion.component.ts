// import { Component } from '@angular/core';

// enum WeightUnit {
//   Pikogramm = 1e-12,
//   Nanogramm = 1e-9,
//   Mikrogramm = 1e-6,
//   Miligramm = 1e-3,
//   Dekagramm = 1e-1,
//   Kilogramm = 1,
//   Quintal = 100,
//   Tons = 1000,
//   Font = 1016.05,
//   Ounce = 0.0283495,
//   Karat = 0.0002,
// }

// type ConversionMatrix = { [key in WeightUnit]: number };

// const weightConversion: ConversionMatrix = {
//   [WeightUnit.Pikogramm]: 1,
//   [WeightUnit.Nanogramm]: 1e3,
//   [WeightUnit.Mikrogramm]: 1e6,
//   [WeightUnit.Miligramm]: 1e9,
//   [WeightUnit.Dekagramm]: 1e10,
//   [WeightUnit.Kilogramm]: 1e12,
//   [WeightUnit.Quintal]: 1e15,
//   [WeightUnit.Tons]: 1e18,
//   [WeightUnit.Font]: 1.01605e18,
//   [WeightUnit.Ounce]: 2.835e10,
//   [WeightUnit.Karat]: 2e10,
// };

// @Component({
//   selector: 'app-conversion',
//   templateUrl: './conversion.component.html',
//   styleUrls: ['./conversion.component.css'],
// })
// export class ConversionComponent {
//   calname: WeightUnit | undefined;
//   calunit: WeightUnit | undefined;
//   textval: number = 0;
//   result: any = 0.0;

//   onSubmit() {
//     if (this.calname && this.calunit && this.textval) {
//       console.log('Selected Unit:', this.calunit);
//       console.log('Text Value:', this.textval);
//       console.log('Selected Change Name:', this.calname);

//       this.result = this.convertWeight(
//         this.textval,
//         this.calname,
//         this.calunit
//       );
//       console.log('Conversion Result:', this.result);
//     } else {
//       console.error('Please select all values');
//     }
//   }

//   convertWeight(
//     value: number,
//     fromUnit: WeightUnit,
//     toUnit: WeightUnit
//   ): number {
//     const valueInKilogramm = value * weightConversion[fromUnit];
//     const convertedValue = valueInKilogramm / weightConversion[toUnit];
//     return convertedValue;
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css'],
})
export class ConversionComponent {
  conversionRates: any = {
    pikogramm: 1e12, // Conversion rate to pikogramm from base unit (e.g., kilogramm)
    nanogramm: 1e9,
    mikrogramm: 1e6,
    miligramm: 1e3,
    dekagramm: 100,
    kilogramm: 1,
    quintal: 0.01,
    tons: 0.001,
    font: 0.000984207,
    ounce: 35.274,
    karat: 5000, // example conversion rate
    // Define other conversion rates as needed
  };

  calname: any;
  calunit: any;
  textval: number = 0;
  result: any;

  onSubmit() {
    if (this.calname && this.calunit && this.textval) {
      const fromRate = this.conversionRates[this.calname];
      const toRate = this.conversionRates[this.calunit];

      console.log('fromRate', fromRate);
      console.log('toRate', toRate);
      // Perform the conversion
      const result = (this.textval * fromRate) / toRate;
      this.result = result.toFixed(4); // Round to 2 decimal places and assign to the result variable

      console.log(result);
    } else {
      console.error('Please select all values');
    }
  }
}
