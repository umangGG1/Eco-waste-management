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
        width:200,
        height: 200},
      fps: 10,
      aspectRatio: 1.0,
      exactCamera: 'environment',
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
      "Fl!bbl3z!ffl3w0bbl3m@g@mm@ch!n3x!pl0r@t!0n5pr!nggl3gr@bb!7yr@pp3rzz": "/scanner/rajeev",
      "@z!muthr@zzl3d!ck@pl@nt@gr@ndm0th3rw@ffl3nugg3tc@ndyl@ndw@v3m@ch!n3z": "/scanner/azad",
      "Sn!ffl3wr@ngl3tw!ddl3t00dl3fl!ck3rm@gl!c0v3rb1ng0bl@nkr@zzl3d@zzl3wh!mm3rz": "/scanner/cautley",
      "Z@pp3rl@ngl3gl0pp3rw!zzleb@rgl3d!bbl3z!muthr@w!zzlefl@pp3rb00gl3h@ng3rz": "/scanner/ganga",
      "C0llyw0bbl3wh@mm3rfl@ngl3w!zzl3d0ddl3b0bbl3pl@yd00dl3b@ngl3w00g!3fl@nd3r": "/scanner/govind",
      "G0ggl3f!ddl3w!ggl3wh@mm3rm@ff!g@n!z3rgl0pp3rb@ffl3gr0undlh3ff3rb!ngl3w!zzl3s": "/scanner/jawahar",
      "H!ckl3w@ddlb00gl3fl@pp3rl@ngl3g@ngl3wh!zzl3w!gg13z00t3rl@ndl3rgr0ggl3p0k3rr": "/scanner/kasturba",
      "Kl!ck3rwh@pp3rgr@bb3rz00dl3wh!mmyb00gl3b0bbl3w!zzlefl@nd3rg@m3rsm@zzl3fl!ng3rz": "/scanner/rkb",
      "J!bbl3p0k3rwh@ngl3b!gl!ng3rr!pp3rz0!dl3wh!zzl3m0pp3rg00g!3wh!ppl3rgr@ndm@zzl3r": "/scanner/rajendra",
      "N!ck3rwh@ck3rd0odl3b@ngl3b@ngl3m!ddl3b00gl3t00dl3d0dd13gr@ndfl@pp3rb!gl3wh!zzl3r": "/scanner/ravindra",
      "M0gg!3l0nkl3wh@mm3rwh!zzl3tw!ddl3t00dl3fl@nd3rm@ffl3d!ddlyw!ddl3gl@mm3rfl@ng3rp0k3rz": "/scanner/sarojini",
      "Q!ddl3w0bbl3fl@pp3rb00gl3m!ddl3m0pp3rb00gl3fl!ngl3tw!zzl3w!gg!3m0gg13b00g!3b0bbl3f!ddl3t00d13": "/scanner/vigyan",

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
        <div id="reader" ></div>
      )}
      
    </div>
  );
};

export default ScannerPage;