const fs = require("fs");
const Database = require("better-sqlite3");

const db = new Database("students.db");
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));

const insert = db.prepare(`
  INSERT INTO students (
    sno, name, email, profileURL, profileStatus, redemptionStatus,
    skillBadges, arcadeGames, totalCompletion, skillBadgesList, arcadeGamesList
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

db.transaction(() => {
  data.forEach(student => {
    insert.run(
      student.sno,
      student.name,
      student.email,
      student.profileURL,
      student.profileStatus,
      student.redemptionStatus,
      student.skillBadges,
      student.arcadeGames,
      student.totalCompletion,
      JSON.stringify(student.skillBadgesList),
      JSON.stringify(student.arcadeGamesList)
    );
  });
})();

console.log("JSON data inserted successfully!");
