function skillsMember () {
  console.log(`${member.name} has ${member.skills.length} skills`)
  member.skills.forEach(skill => {
    console.log(`${member.name} knows ${skill}`)
  })
}
