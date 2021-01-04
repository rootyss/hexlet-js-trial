const takeOldest = (users, count = 1) => {
  const users2 = users.sort((a, b) => Math.sign(Date.parse(a.birthday) - Date.parse(b.birthday)));
  return users2.slice(0, count);
}

const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];

console.log(takeOldest(users));