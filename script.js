const data = [
    { no: 1, building: "Admin Lt.1", room: "SECURED FACILITIES CORIDOR 1 (SHAFT)", qty: "1" },
    { no: 2, building: "Admin Lt.1", room: "SECURED FACILITIES CORIDOR 2 (SHAFT)", qty: "1" },
    { no: 3, building: "Admin Lt.1", room: "SECURED FACILITIES CORIDOR 3 (SHAFT)", qty: "1" },
    { no: 4, building: "Admin Lt.1", room: "CLEANING ROOM (SHAFT)", qty: "1" },
    { no: 5, building: "Admin Lt.1", room: "ISP ENTRANCE A (SHAFT)", qty: "1" },
    { no: 6, building: "Admin Lt.1", room: "SECURED FACILITIES CORIDOR 1 (SHAFT)", qty: "1" },
    { no: 7, building: "Admin Lt.1", room: "SECURE DOCK B (SHAFT)", qty: "1" },
    { no: 8, building: "Admin Lt.1", room: "DINNING ROOM (ALUMINIUM)", qty: "3" },
    { no: 9, building: "Admin Lt.1", room: "MAIN LOBBY (ALUMINIUM)", qty: "3" },
    { no: 10, building: "Admin Lt.1", room: "ACCESS GANTRY (ALUMINIUM)", qty: "3" },
    { no: 11, building: "Admin Lt.1", room: "LIFT LOBBY (ALUMINIUM)", qty: "3" },
    { no: 12, building: "Admin Lt.1", room: "CORRIDOR WEST", qty: "3" },
    { no: 13, building: "Admin Lt.1", room: "CORRIDOR WEST", qty: "3" },
    { no: 14, building: "Admin Lt.1", room: "CLEANING EQUIPMENT & SUPPLY STORAGE", qty: "3" },
    { no: 15, building: "Admin Lt.1", room: "FOOD COURT STORAGE", qty: "3" },
    { no: 16, building: "Admin Lt.1", room: "Zone B PRAYER ROOM", qty: "3" },
    { no: 17, building: "Admin Lt.1", room: "MEP CORRIDORPHASE 1 A", qty: "3" },
    { no: 18, building: "Admin Lt.1", room: "IT STAGING A", qty: "3" },
    { no: 19, building: "Admin Lt.1", room: "IT STORAGE A", qty: "3" },
    { no: 20, building: "Admin Lt.1", room: "IT MMR A", qty: "3" },
    { no: 21, building: "Admin Lt.1", room: "FLEXIBLE SPACE", qty: "3" },
    { no: 22, building: "Admin Lt.1", room: "SHREDDING ROOM", qty: "3" },
    { no: 23, building: "Admin Lt.1", room: "IT/ADMIN CORRIDOR", qty: "3" },
    { no: 24, building: "Admin Lt.1", room: "SECURE LOGISTIC CORRIDOR B", qty: "3" },
    { no: 25, building: "Admin Lt.1", room: "IT MMR B", qty: "3" },
    { no: 26, building: "Admin Lt.1", room: "MAIN SECURITY SERVER ROOM", qty: "3" },
    { no: 27, building: "Admin Lt.1", room: "MAIN ENTERPRISE NETWORK ROOM", qty: "3" },
    { no: 28, building: "Admin Lt.1", room: "CORRIDOR EAST", qty: "3" },
    { no: 29, building: "Admin Lt.1", room: "IT STAGING B", qty: "3" },
    { no: 30, building: "Admin Lt.1", room: "IT STORAGE B", qty: "3" },
    { no: 31, building: "Admin Lt.1", room: "STAFF OPEN SPACE", qty: "3" },
    { no: 32, building: "Admin Lt.1", room: "MEP SPARE PARTS STORAGE", qty: "3" },
    { no: 33, building: "Admin Lt.1", room: "GENERAL FACILITY STORAGE", qty: "3" },
    { no: 34, building: "Admin Lt.1", room: "BMS ROOM", qty: "3" },
    { no: 35, building: "Admin Lt.1", room: "UPS ROOM", qty: "3" },
    { no: 36, building: "Admin Lt.1", room: "SECURE LOADING DOCK A", qty: "3" },
    { no: 37, building: "Admin Lt.1", room: "SECURE DOCK B", qty: "3" },
    { no: 38, building: "Admin Lt.1", room: "Delivery office SECURE LOADING DOCK A", qty: "3" },
    { no: 39, building: "Admin Lt.1", room: "Delivery Office NON SECURE DOCK A", qty: "3" },
    { no: 40, building: "Admin Lt.1", room: "SECURE DOCK B", qty: "3" },
    { no: 41, building: "Admin Lt.1", room: "BIKER SHOWER F", qty: "3" },
    { no: 42, building: "Admin Lt.1", room: "BIKER SHOWER M", qty: "3" },
    { no: 43, building: "Admin Lt.1", room: "TEMPORARY WASTE AREA", qty: "3" },
    { no: 44, building: "Admin Lt.1", room: "MEP TECHNICAL ROOM", qty: "3" },
    { no: 45, building: "Admin Lt.1", room: "MAIN LOBBY", qty: "3" },
    { no: 46, building: "Admin Lt.1", room: "BATTERY ROOM", qty: "3" },
    { no: 47, building: "Admin Lt.1", room: "FIRE COMMAND CENTER", qty: "3" },
    { no: 48, building: "Admin Lt.1", room: "NON SECURE DOCK A", qty: "3" },
    { no: 49, building: "Admin Lt.1", room: "BREAK ROOM", qty: "3" },
    { no: 50, building: "Admin Lt.1", room: "CSP SERVICE CORRIDOR", qty: "3" },
    { no: 51, building: "Admin Lt.1", room: "CSP SERVICE CORRIDOR (New Door)", qty: "3" },
    { no: 52, building: "Admin Lt.1", room: "FIRE COMMAND CENTER", qty: "3" },
    { no: 53, building: "Admin Lt.1", room: "SERVICE CORRIDOR", qty: "3" },
    { no: 54, building: "Admin Lt.1", room: "SERVICE CORRIDOR", qty: "3" },
    { no: 55, building: "Admin Lt.1", room: "DOMESTIC WASTE ROOM", qty: "3" },
    { no: 56, building: "Admin Lt.1", room: "GENERAL STORAGE", qty: "3" },
    { no: 57, building: "Admin Lt.1", room: "CAFETARIA", qty: "3" },
    { no: 58, building: "Admin Lt.1", room: "SECURE LOGISTIC CORRIDOR A", qty: "3" },
    { no: 59, building: "Admin Lt.1", room: "SECURE LOGISTIC CORRIDOR B", qty: "3" },
    { no: 60, building: "Admin Lt.1", room: "SECURED FACILITIES CORIDOR", qty: "3" },
    { no: 61, building: "Admin Lt.1", room: "TELECOM ROOM ADMIN", qty: "3" },
    { no: 62, building: "Admin Lt.1", room: "DATA CENTER SECURITY RECEPTION", qty: "3" },
    { no: 63, building: "Admin Lt.1", room: "SECURE LOADING DOCK A", qty: "3" },
    { no: 64, building: "Admin Lt.1", room: "RECEPTION ROOM", qty: "3" },
    { no: 65, building: "Admin Lt.1", room: "DELIVERY OFFICE A (SHAFT)", qty: "3" },
    { no: 66, building: "Admin Lt.1", room: "SECURE DOCK B (SHAFT)", qty: "3" },
    { no: 67, building: "Admin Lt.1", room: "GAS SUPRESSION ROOM ADMIN", qty: "3" },
    { no: 68, building: "Admin Lt.1", room: "SMOKE STOP LOBBY A (EMERGENCY)", qty: "3" },
    { no: 69, building: "Admin Lt.1", room: "STAFF OPEN SPACE (EMERGENCY)", qty: "3" },
    { no: 70, building: "Admin Lt.1", room: "EXIT CORRIDOR B (EMERGENCY)", qty: "3" },
    { no: 71, building: "Admin Lt.1", room: "SMOKE STOP LOBBY (EMERGENCY)", qty: "3" },
    { no: 72, building: "Admin Lt.1", room: "FIRE STAIR EAST (EMERGENCY)", qty: "3" },
    { no: 73, building: "Admin Lt.1", room: "CORRIDOR EAST (EMERGENCY)", qty: "3" },
    { no: 74, building: "Admin Lt.1", room: "CORRIDOR WEST A (EMERGENCY)", qty: "3" },
    { no: 75, building: "Admin Lt.1", room: "CORRIDOR EAST B (EMERGENCY)", qty: "3" },
    { no: 76, building: "Admin Lt.1", room: "AUDITORIUM (EMERGENCY)", qty: "3" },
    { no: 77, building: "Admin Lt.1", room: "CORRIDOR WEST (EMERGENCY)", qty: "3" },
    { no: 78, building: "Admin Lt.1", room: "SECURE LOGISTIC CORRIDOR A (EMERGENCY)", qty: "3" },
    { no: 79, building: "Admin Lt.1", room: "SECURE DOCK B (EMERGENCY)", qty: "3" },
    { no: 80, building: "Admin Lt.1", room: "SECURE LOADING DOCK A (ROLLER SHUTTER)", qty: "3" },
    { no: 81, building: "Admin Lt.1", room: "SECURE DOCK B (ROLLER SHUTTER)", qty: "3" },
    { no: 82, building: "Admin Lt.1", room: "NON SECURE DOCK A (ROLLER SHUTTER)", qty: "3" },
    { no: 83, building: "Admin Lt.1", room: "SECURE LOADING DOCK A (ROLLER SHUTTER)", qty: "3" },
    { no: 84, building: "Admin Lt.1", room: "SECURE DOCK B (ROLLER SHUTTER)", qty: "3" },
    { no: 85, building: "Admin Lt.1", room: "TX + MV ROOM ADMIN (ROLLER SHUTTER)", qty: "3" },
    { no: 86, building: "Admin Lt.1", room: "ATS & MDU ROOM ADMIN (ROLLER SHUTTER)", qty: "3" },
    { no: 87, building: "Admin Lt.2", room: "TOILET (F) 1 (SHAFT)", qty: "3" },
    { no: 88, building: "Admin Lt.2", room: "TOILET (F) 2 (SHAFT)", qty: "3" },
    { no: 89, building: "Admin Lt.2", room: "TOILET (F) 3 (SHAFT)", qty: "3" },
    { no: 90, building: "Admin Lt.2", room: "TRAINING MATERIAL STORAGE (SHAFT)", qty: "3" }, 
    { no: 91, building: "Admin Lt.2", room: "CORRIDOR (SHAFT)", qty: "3" },
    { no: 92, building: "Admin Lt.2", room: "SECONDARY NETWORK ROOM (SHAFT)", qty: "3" },
    { no: 93, building: "Admin Lt.2", room: "CORRIDOR (ALUMINIUM)", qty: "3" },
    { no: 94, building: "Admin Lt.2", room: "COMMAND CENTER", qty: "3" },
    { no: 95, building: "Admin Lt.2", room: "PANEL ROOM", qty: "3" },
    { no: 96, building: "Admin Lt.2", room: "PATIO A", qty: "3" },
    { no: 97, building: "Admin Lt.2", room: "PATIO B", qty: "3" },
    { no: 98, building: "Admin Lt.2", room: "PANTRY", qty: "3" },
    { no: 99, building: "Admin Lt.2", room: "CORRIDOR COMMAND CENTER", qty: "3" },
    { no: 100, building: "Admin Lt.2", room: "CORRIDOR TO PARTIAL ROOF PLAN", qty: "3" },
    { no: 101, building: "Admin Lt.2", room: "SECONDARY NETWORK ROOM", qty: "3" },
    { no: 102, building: "Admin Lt.2", room: "CORRIDOR TO ROOF PLAN (SHAFT)", qty: "3" },
    { no: 103, building: "Admin Lt.2", room: "LV CRITICAL RISER B (SHAFT)", qty: "3" },
    { no: 104, building: "Admin Lt.2", room: "SECURITY OPERATION CENTER (COC)", qty: "3" },
    { no: 105, building: "Admin Lt.2", room: "NETWORK OPERATION CENTER (NOC)", qty: "3" },
];
  
  function renderTable(filteredData) {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    filteredData.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.no}</td>
        <td>${item.building}</td>
        <td>${item.room}</td>
        <td>${item.qty}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  document.getElementById("searchInput").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filtered = data.filter(
      (d) =>
        d.room.toLowerCase().includes(searchTerm) ||
        d.building.toLowerCase().includes(searchTerm)
    );
    renderTable(filtered);
  });
  
  renderTable(data);

  document.getElementById('searchInput').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#tableBody tr');
    let hasResults = false;
    
    rows.forEach(row => {
        const roomName = row.cells[2].textContent.toLowerCase(); // Kolom Room
        const buildingName = row.cells[1].textContent.toLowerCase(); // Kolom Building
        const shouldShow = roomName.includes(searchValue) || buildingName.includes(searchValue);
        
        row.style.display = shouldShow ? '' : 'none';
        if (shouldShow) hasResults = true;
    });
    
    // Toggle pesan "Data tidak ditemukan"
    const noResultsMsg = document.getElementById('noResultsMessage');
    if (!hasResults && searchValue.length > 0) {
        noResultsMsg.style.display = 'block';
    } else {
        noResultsMsg.style.display = 'none';
    }
});

// Saat memuat data atau setelah render tabel
function addMobileLabels() {
    if (window.innerWidth <= 768px) {
        const headers = document.querySelectorAll('th');
        const cells = document.querySelectorAll('td');
        
        headers.forEach((header, index) => {
            cells.forEach(cell => {
                if (cell.cellIndex === index) {
                    cell.setAttribute('data-label', header.textContent.replace(/↵/g, '').trim());
                }
            });
        });
    }
}

// Panggil fungsi ini setelah tabel diisi
addMobileLabels();

// Dan saat window di-resize
window.addEventListener('resize', addMobileLabels);
