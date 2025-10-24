// Add new subject row
document.getElementById("addSubject").addEventListener("click", function () {
  const container = document.getElementById("subjectsContainer");
  const row = document.createElement("div");
  row.classList.add("row", "mb-2", "align-items-center");
  row.innerHTML = `
    <div class="col-md-5">
      <input type="text" class="form-control" name="subject[]" placeholder="Subject Name" required>
    </div>
    <div class="col-md-5">
      <input type="number" class="form-control" name="score[]" placeholder="Score (0 - 100)" required>
    </div>
    <div class="col-md-2 text-center">
      <button type="button" class="btn btn-danger btn-sm deleteRow">Delete</button>
    </div>
  `;
  container.appendChild(row);

  // Reattach delete event
  addDeleteFunctionality();
});

// Function to handle delete buttons
function addDeleteFunctionality() {
  const deleteButtons = document.querySelectorAll(".deleteRow");
  deleteButtons.forEach(btn => {
    btn.onclick = function () {
      this.closest(".row").remove();
    };
  });
}

// Run it once for the first row
addDeleteFunctionality();

// Handle grade calculation
document.getElementById("gradeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const subjects = document.getElementsByName("subject[]");
  const scores = document.getElementsByName("score[]");
  let total = 0;
  let results = [];

  for (let i = 0; i < subjects.length; i++) {
    let score = parseFloat(scores[i].value);
    let grade = "";
    if (score >= 70) grade = "A";
    else if (score >= 60) grade = "B";
    else if (score >= 50) grade = "C";
    else if (score >= 45) grade = "D";
    else grade = "F";

    total += score;
    results.push({ subject: subjects[i].value, score, grade });
  }

  const avg = total / subjects.length;
  const gpa = (avg / 20).toFixed(2);

  let reportHTML = `
    <table class='table table-bordered'>
      <thead class="table-dark">
        <tr><th>Subject</th><th>Score</th><th>Grade</th></tr>
      </thead>
      <tbody>
  `;
  results.forEach(r => {
    reportHTML += `<tr><td>${r.subject}</td><td>${r.score}</td><td>${r.grade}</td></tr>`;
  });
  reportHTML += `
      </tbody>
    </table>
    <h5 class="text-primary">Average Score: ${avg.toFixed(2)}</h5>
    <h5 class="text-success">GPA: ${gpa}</h5>
  `;
  document.getElementById("reportCard").innerHTML = reportHTML;
  document.getElementById("result").classList.remove("d-none");

  // Draw Chart
  const ctx = document.getElementById("gpaChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: results.map(r => r.subject),
      datasets: [{
        label: "Scores",
        data: results.map(r => r.score),
        borderWidth: 1
      }]
    }
  });
});

// Download report
document.getElementById("downloadReport").addEventListener("click", function () {
  const report = document.getElementById("result");
  html2pdf().from(report).save("Student_Report.pdf");
});
