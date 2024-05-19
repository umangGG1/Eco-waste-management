import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import './scannerPage.css'; // Import CSS file for styling

const ScannerPage = () => {
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width:208,
        height: 200},
      fps: 10,
      aspectRatio: 1.0,
      preferFrontCamera: false,
    });

    scanner.render(onScanSuccess, onScanError);

    function onScanSuccess(result) {
      console.log('QR code scanned:', result);
      setScanResult(result);
      scanner.clear(); // Clear the scanner after successful scan
      redirectToHostelPage(result);
    }

    function onScanError(error) {
      console.error('QR code scan error:', error);
    }

    // return () => {
    //   scanner.clear(); // Clean up the scanner when component unmounts
    // };
  }, []);
  const redirectToHostelPage = (hostelName) => {
    // Map the hostel names to their corresponding URLs
    const hostelUrls = {
      "Rajeev": "/scanner/rajeev",
      "Hostel2": "/hostels/hostel2",
      // Add other hostels as needed
    };

    // Get the URL for the scanned hostel name
    const url = hostelUrls[hostelName];
    if (url) {
      window.location.href = url;
    } else {
      console.error(`No URL found for hostel: ${hostelName}`);
    }
  };

  return (
    <div id="qrcodeformn">
      <h1>QR Code Scanner</h1>
      {scanResult ? (
        <div>
          Redirecting to the hostel 
        </div>
      ) : (
        <div id="reader" style={{width:"250px" , height:"250px", overflow: "hidden"}}></div>
      )}
      
    </div>
  );
};

export default ScannerPage;