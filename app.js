async function startScanning() {
    let video = document.getElementById('barcodeCamview');
    let output = document.getElementById('barcodeDetectionResult');
  
    let devices = await navigator.mediaDevices.enumerateDevices();
    let cameras = devices.filter(d => d.kind == 'videoinput');
  
    if (cameras.length == 0) {
      output.innerText = "No cameras detected";
      return
    }
  
    let backCameras = cameras.filter(d => d.label.includes('back'));
  
    let camera = backCameras.length > 0 ? backCameras[0] : cameras[0];
  
    let stream = await navigator.mediaDevices.getUserMedia({
      video: {
        deviceId: camera.deviceId
      }
    });
    video.srcObject = stream;
    video.hidden = false;
    video.play();
    output.innerText = "Camera is ready";
  }
  