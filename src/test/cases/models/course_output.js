const Course = require('../../../main/models/Course')
var Course_Output = require('../../../main/models/Course_Output.js');
const { expect } = require('../../chai')
 
describe('Model - Course_Outputs', () => {
 
    describe('setting variables', () => {
 
        it('set class score 1', async () => {
      var course_output = new Course_Output(2, 3, 7, "test");
      course_output.setClassScore(3);
 
      expect(course_output.class_score).to.deep.equal(3);
        })
 
    it('set class score 2', async () => {
      var course_output = new Course_Output(2, 3, 7, "test");
      course_output.setClassScore(5);
 
      expect(course_output.class_score).to.deep.equal(5);
        })
 
    it('set class score 3', async () => {
      var course_output = new Course_Output(2, 3, 7, "test");
      course_output.setClassScore(99);
 
      expect(course_output.class_score).to.deep.equal(99);
    })
 
    it('set artifact score 1', async () => {
      var course_output = new Course_Output(2, 3, 7, "test");
      course_output.setArtifactScore(3);
 
      expect(course_output.artifact_score).to.deep.equal(3);
    })
 
    it('set artifact score 2', async () => {
      var course_output = new Course_Output(2, 3, 7, "test");
      course_output.setArtifactScore(5);
 
      expect(course_output.artifact_score).to.deep.equal(5);
    })
 
    it('set artifact score 2', async () => {
      var course_output = new Course_Output(2, 3, 7, "test");
      course_output.setArtifactScore(99);
 
      expect(course_output.artifact_score).to.deep.equal(99);
    })
 
    it('set SLO score 1', async () => {
      var course_output = new Course_Output(2, 3, 7, "test");
      course_output.setSLOScore(3);
 
      expect(course_output.slo_score).to.deep.equal(3);
    })
 
    it('set SLO score 2', async () => {
      var course_output = new Course_Output(2, 3, 7, "test");
      course_output.setSLOScore(5);
 
      expect(course_output.slo_score).to.deep.equal(5);
    })
 
    it('set SLO score 3', async () => {
      var course_output = new Course_Output(2, 3, 7, "test");
      course_output.setSLOScore(99);
 
      expect(course_output.slo_score).to.deep.equal(99);
    })
 
    it('set student evaluations 1', async () => {
      var course_output = new Course_Output(2, 3, 7, "test");
      course_output.setStudentEvaluations("evaluation");
 
      expect(course_output.student_evaluations).to.deep.equal("evaluation");
    })
 
    it('set student evaluations 2', async () => {
      var course_output = new Course_Output(2, 3, 7, "test");
      course_output.setStudentEvaluations("hello");
 
      expect(course_output.student_evaluations).to.deep.equal("hello");
    })
 
    it('set student_evaluations 3', async () => {
      var course_output = new Course_Output(2, 3, 7, "test");
      course_output.setStudentEvaluations("student");
 
      expect(course_output.student_evaluations).to.deep.equal("student");
    })
        describe('validation', async() => {
 
            it('Data Members 1', () => {
                var course_output = new Course_Output(2, 3, 7, "test");
                var result = course_output.isValid();
 
                expect(result).to.deep.equal(true);
            })
 
            it('Data Members 2', () => {
                var course_output = new Course_Output(null, null, null, null);
                var result = course_output.isValid();
 
                expect(result).to.deep.equal(false);
            })
 
            it('Data Members 3', () => {
                var course_output = new Course_Output(2, null, 3, null);
                var result = course_output.isValid();
 
                expect(result).to.deep.equal(false);
            })
        })
 
        describe('data conversion', async() => {
 
            it('toString 1', () => {
                var course_output = new Course_Output(2, 3, 7, "test");
                var result = course_output.toString()
                var expected = "Course Score: 2\nArtifact Score: 3\nSLO Score: 7\nStudent Evaluations: test"
 
                expect(result).to.deep.equal(expected);
            })
 
            it('toString 2', () => {
                var course_output = new Course_Output(4, 6, 9, "test1");
                var result = course_output.toString()
                var expected = "Course Score: 4\nArtifact Score: 6\nSLO Score: 9\nStudent Evaluations: test1"
 
                expect(result).to.deep.equal(expected);
            })
 
            it('toString 3', () => {
                var course_output = new Course_Output(77, 88, 99, "test3");
                var result = course_output.toString()
                var expected = "Course Score: 77\nArtifact Score: 88\nSLO Score: 99\nStudent Evaluations: test3"
 
                expect(result).to.deep.equal(expected);
            })
        })
    })
})