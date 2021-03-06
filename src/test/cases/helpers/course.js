const Course = require('../../../main/helpers/course')
const { expect } = require('../../chai')
const fs = require("fs")
 
describe('Helper - Course', () => {
 
    describe('calculate', () => {
 
        it('class score', async () => {
      var scores = [5, 5, 4, 4, 3, 3]
            const score = await Course.calculateClassScore(scores)
 
            expect(score).to.deep.equal(4)
        })
 
        it('artifact score', async () => {
            var scores = [true, false, false]
            const score = await Course.calculateArtifactScore(scores)
 
            expect(score).to.deep.equal(1/3)
        })
 
        it('SLO score', async () => {
            var scores1 = [true, false, false]
            var scores2 = [false, true, false]
            var scores3 = [false, false, true]
 
            const score = await Course.calculateSLOScore(scores1, scores2, scores3)
 
            expect(score).to.deep.equal(1/3)
        })
    })
    describe('update', () => {
 
        it('all affected scores', async () => {
            var scores = [5, 5, 4, 4, 3, 3]
            var scores1 = [true, false, false]
            var scores2 = [false, true, false]
            var scores3 = [false, false, true]
 
            const score = await Course.updateAffectedScores(scores, scores1, scores2, scores3)
            const expectedResults = [4, 1/3, 1/3]
 
            expect(score).to.deep.equal(expectedResults)
        })
    })
    describe('write', async() => {
 
        it('write scores to file', () => {
            var scores = [5, 5, 4, 4, 3, 3]
            var scores1 = [true, false, false]
            var scores2 = [false, true, false]
            var scores3 = [false, false, true]
 
            const filepath = Course.writeScores(scores, scores1, scores2, scores3)
            console.log("FILEPATH: "+filepath)
            expect(fs.existsSync(filepath)).to.deep.equal(true)
 
        })
    })
})