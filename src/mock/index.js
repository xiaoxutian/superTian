import Mock from 'mockjs'

const vipPromission = require("./data/vip-promission.json")

Mock.mock('/Promission', 'get', vipPromission)

export default Mock;