import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import Quagga from 'quagga';
import { BeepService } from './services/beep.service';


import { Router } from '@angular/router';

// import to open dialog
import { MatDialog } from '@angular/material/dialog';

// import product dialog
import { ProductComponent } from './components/product/product.component';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {

  errorMessage: string;
  scannedCode: string;
  arrScannedCodes: Array<string>;


  // Product
  productImage: any;
  productName: string;
  productAvailability: number;
  productPrice: number;



  private lastScannedCode: string;
  private lastScannedCodeDate: number;


  constructor(
    private beepService: BeepService,
    public platform: Platform,
    public dialog: MatDialog,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    // this.dialog.open(ProductComponent)
  }


  ngAfterViewInit(): void {
    if (!navigator.mediaDevices || !(typeof navigator.mediaDevices.getUserMedia === 'function')) {
      this.errorMessage = 'getUserMedia is not supported';
      return;
    } else {

      Quagga.init({
        inputStream: {
          name: "Live",
          type: "LiveStream",
          constraints: {
            facingMode: 'environment' // restrict camera type
          },
          area: { // defines rectangle of the detection
            top: '40%',    // top offset
            right: '0%',  // right offset
            left: '0%',   // left offset
            bottom: '40%'  // bottom offset
          },
        },
        decoder: {
          readers: ['ean_reader'] // restrict code types
        },
        locate: true,
      },
        (err) => {
          if (err) {
            this.errorMessage = `QuaggaJS could not be initialized, err: ${err}`;
          } else {
            Quagga.start();
            Quagga.onDetected((res) => {
              this.onBarcodeScanned(res.codeResult.code);
              // window.alert(`code: ${res.codeResult.code}`);
              console.log("barcode was scanned successfully: ", res.codeResult.code)

              // if successful open dialog showing product information
              // this.dialog.open(ProductComponent)

              Quagga.stop();
              this.router.navigateByUrl(`/pages/camera/product/${this.scannedCode}`)

            })
          }
        });




      // // open in android app
      // if (this.platform.ANDROID.valueOf()) {
      //   // console.log("android")
      //   // alert("running in android app")

      //   var backCamID;
      //   navigator.mediaDevices.enumerateDevices()
      //     .then(function (devices) {
      //       devices.forEach(function (device) {
      //         //alert( JSON.stringify(device) );
      //         alert("device: " + "name:" + device.kind + device.deviceId)
      //         if (device.kind === 'videoinput') {
      //           alert("found one" + device.kind + "id: " + device.deviceId);
      //           backCamID = device.deviceId;
      //         }
      //         if (device.kind == "videoinput" && device.label.match(/back/) != null) {
      //           //alert("Back found!");
      //           backCamID = device.deviceId;
      //           alert("Back camera is found: " + backCamID);
      //         }
      //       });
      //     })
      //     .finally(() => {
      //       alert("finally")
      //       if (typeof (backCamID) == "undefined") {
      //         alert("back camera not found.");
      //       }
      //       Quagga.init({
      //         inputStream: {
      //           name: "Live",
      //           type: "LiveStream",
      //           constraints: {
      //             deviceId: backCamID
      //             // facingMode: 'environment', // restrict camera type,
      //             // deviceId: arr[1]
      //           },
      //           area: { // defines rectangle of the detection
      //             top: '40%',    // top offset
      //             right: '0%',  // right offset
      //             left: '0%',   // left offset
      //             bottom: '40%'  // bottom offset
      //           },
      //         },
      //         decoder: {
      //           readers: ['ean_reader'] // restrict code types
      //         },
      //       },
      //         (err) => {
      //           if (err) {
      //             this.errorMessage = `QuaggaJS could not be initialized, err: ${err}`;
      //           } else {
      //             Quagga.start();
      //             Quagga.onDetected((res) => {
      //               this.onBarcodeScanned(res.codeResult.code);
      //               // window.alert(`code: ${res.codeResult.code}`);
      //               console.log("code was scanned successfully: ", res.codeResult.code)
      //             })
      //           }
      //         });
      //     })
      //     .catch(function (err) {
      //       alert(err.name + ": " + err.message);
      //     });




      //   // alert("result:" + arr);




      // } else {
      //   // not open in android app
      //   Quagga.init({
      //     inputStream: {
      //       name: "Live",
      //       type: "LiveStream",
      //       constraints: {
      //         facingMode: 'environment' // restrict camera type
      //       },
      //       area: { // defines rectangle of the detection
      //         top: '40%',    // top offset
      //         right: '0%',  // right offset
      //         left: '0%',   // left offset
      //         bottom: '40%'  // bottom offset
      //       },
      //     },
      //     decoder: {
      //       readers: ['ean_reader'] // restrict code types
      //     },
      //   },
      //     (err) => {
      //       if (err) {
      //         this.errorMessage = `QuaggaJS could not be initialized, err: ${err}`;
      //       } else {
      //         Quagga.start();
      //         Quagga.onDetected((res) => {
      //           this.onBarcodeScanned(res.codeResult.code);
      //           // window.alert(`code: ${res.codeResult.code}`);
      //           console.log("code was scanned successfully: ", res.codeResult.code)
      //         })
      //       }
      //     });




      //   // hope to finish below: 
      //   // let permissions = cordova.plugins.permissions;
      //   // permissions.checkPermission(permissions.CAMERA, (res) => {
      //   //   if (!res.hasPermission) {
      //   //     permissions.requestPermission(permissions.CAMERA, open());
      //   //   } else {
      //   //     Quagga.init({
      //   //       inputStream: {
      //   //         name: "Live",
      //   //         type: "LiveStream",
      //   //         constraints: {
      //   //           facingMode: 'environment' // restrict camera type
      //   //         },
      //   //         area: { // defines rectangle of the detection
      //   //           top: '40%',    // top offset
      //   //           right: '0%',  // right offset
      //   //           left: '0%',   // left offset
      //   //           bottom: '40%'  // bottom offset
      //   //         },
      //   //       },
      //   //       decoder: {
      //   //         readers: ['ean_reader'] // restrict code types
      //   //       },
      //   //     },
      //   //       (err) => {
      //   //         if (err) {
      //   //           this.errorMessage = `QuaggaJS could not be initialized, err: ${err}`;
      //   //         } else {
      //   //           Quagga.start();
      //   //           Quagga.onDetected((res) => {
      //   //             this.onBarcodeScanned(res.codeResult.code);
      //   //             // window.alert(`code: ${res.codeResult.code}`);
      //   //             console.log("code was scanned successfully: ", res.codeResult.code)
      //   //           })
      //   //         }
      //   //       });
      //   //   }
      //   // })

      // }

    }

  }



  onBarcodeScanned(code: string) {

    // ignore duplicates for an interval of 1.5 seconds
    const now = new Date().getTime();
    if (code === this.lastScannedCode && (now < this.lastScannedCodeDate + 1500)) {
      return;
    }

    // ignore unknown articles
    // const article = this.catalogue.find(a => a.ean === code);
    // if (!article) {
    //   return;
    // }

    // this.shoppingCart.addArticle(article);

    this.lastScannedCode = code;
    this.lastScannedCodeDate = now;

    this.scannedCode = this.lastScannedCode;

    // add beep sound
    this.beepService.beep();

    // this.changeDetectorRef.detectChanges();
  }

}
