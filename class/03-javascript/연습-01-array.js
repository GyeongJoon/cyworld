let classmates = ["철수","영희","훈이"]
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates[2]
// '훈이'
classmates.includes("훈이")
// true
classmates.includes("맹구")
// false
classmates.length
// 3
classmates.push("맹구")
// 4
classmates.includes("맹구")
// true
classmates.length
// 4
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.pop()
// '맹구'
classmates
// (3) ['철수', '영희', '훈이']
classmates.length
// 3

let developer = ["사랑","관계","감사","자신","성실"]
// undefined
developer[0]
// '사랑'
let dream = ["커리어점프","성공","할수있다"]
// undefined
developer
// (5) ['사랑', '관계', '감사', '자신', '성실']
dream
// (3) ['커리어점프', '성공', '할수있다']
developer.concat(dream)
// (8) ['사랑', '관계', '감사', '자신', '성실', '커리어점프', '성공', '할수있다']
let result = developer.concat(dream)
// undefined
result
// (8) ['사랑', '관계', '감사', '자신', '성실', '커리어점프', '성공', '할수있다']