import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import Quagga from 'quagga';
import { BeepService } from './beep.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {

  errorMessage: string;
  private lastScannedCode: string;
  private lastScannedCodeDate: number;


  constructor(
    private beepService: BeepService,
    public platform: Platform,
  ) {

  }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    if (!navigator.mediaDevices || !(typeof navigator.mediaDevices.getUserMedia === 'function')) {
      this.errorMessage = 'getUserMedia is not supported';
      return;
    } else {
      // open in android app
      if (this.platform.ANDROID.valueOf()) {
        // console.log("android")
        alert("running in android app")

      } else {
        // not open in android app
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
        },
          (err) => {
            if (err) {
              this.errorMessage = `QuaggaJS could not be initialized, err: ${err}`;
            } else {
              Quagga.start();
              Quagga.onDetected((res) => {
                this.onBarcodeScanned(res.codeResult.code);
                // window.alert(`code: ${res.codeResult.code}`);
                console.log("code was scanned successfully: ", res.codeResult.code)
              })
            }
          });


        // let permissions = cordova.plugins.permissions;
        // permissions.checkPermission(permissions.CAMERA, (res) => {
        //   if (!res.hasPermission) {
        //     permissions.requestPermission(permissions.CAMERA, open());
        //   } else {
        //     Quagga.init({
        //       inputStream: {
        //         name: "Live",
        //         type: "LiveStream",
        //         constraints: {
        //           facingMode: 'environment' // restrict camera type
        //         },
        //         area: { // defines rectangle of the detection
        //           top: '40%',    // top offset
        //           right: '0%',  // right offset
        //           left: '0%',   // left offset
        //           bottom: '40%'  // bottom offset
        //         },
        //       },
        //       decoder: {
        //         readers: ['ean_reader'] // restrict code types
        //       },
        //     },
        //       (err) => {
        //         if (err) {
        //           this.errorMessage = `QuaggaJS could not be initialized, err: ${err}`;
        //         } else {
        //           Quagga.start();
        //           Quagga.onDetected((res) => {
        //             this.onBarcodeScanned(res.codeResult.code);
        //             // window.alert(`code: ${res.codeResult.code}`);
        //             console.log("code was scanned successfully: ", res.codeResult.code)
        //           })
        //         }
        //       });
        //   }
        // })

      }

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

    // add beep sound
    this.beepService.beep();

    // this.changeDetectorRef.detectChanges();
  }

}
