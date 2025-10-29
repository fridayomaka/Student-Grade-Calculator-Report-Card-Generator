function saveStudentRecord(name, id, className, gpa) {
  let records = JSON.parse(localStorage.getItem("studentRecords")) || [];
  records.push({ name, id, className, gpa });
  records.sort((a, b) => b.gpa - a.gpa);
  localStorage.setItem("studentRecords", JSON.stringify(records));
  displayRanking(records);
}

function displayRanking(records) {
  const section = document.getElementById("rankingSection");
  const list = document.getElementById("rankList");
  list.innerHTML = `
    <table class="table table-striped">
      <thead><tr><th>Rank</th><th>Name</th><th>Student ID</th><th>Class</th><th>GPA</th></tr></thead>
      <tbody>
        ${records.map((r, i) => `<tr><td>${i+1}</td><td>${r.name}</td><td>${r.id}</td><td>${r.className}</td><td>${r.gpa}</td></tr>`).join("")}
      </tbody>
    </table>`;
  section.style.display = "block";
}

function logout() {
  localStorage.removeItem("studentRecords");
  window.location.href = "index.html";
}
