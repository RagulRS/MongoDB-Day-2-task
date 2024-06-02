//Find all the topics and tasks which are thought in the month of October
db.fsd_topics.find(
  {
    Date: {
      $gte: ISODate("2020-10-01T00:00:00.000Z"),
      $lt: ISODate("2020-11-01T00:00:00.000Z"),
    },
  },
  { _id: 0, Topic: 1, Task: 1 }
);

//Find the number of problems solved by the user in codekata
db.codekata.find({ Status: { $in: ["solved"] } }).count();

//Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.companyDrives.find({
  driveDate: {
    $gt: ISODate("2020-08-15T00:00:00Z"),
    $lt: ISODate("2020-08-31T00:00:00Z"),
  },
});

//Find all the company drives and students who are appeared for the placement.
db.companyDrives.find(
  {},
  {
    _id: 0,
    name: 1,
    students: 1,
  }
);

// Find all the mentors with who has the mentee's count more than 15
db.mentor.find(
  { menteesCount: { $gt: 15 } },
  { _id: 0, name: 1, mentorRole: 1, menteesCount: 1 }
);

//Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.attendance
  .find({
    attendance: "absent",
    taskSubmitted: false,
    date: {
      $gte: ISODate("2020-10-15T00:00:00.000Z"),
      $lt: ISODate("2020-11-01T00:00:00.000Z"),
    },
  })
  .count();
