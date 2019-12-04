// Course Output file constructor
// This model represents the object for our course_output file. All parameteres are
// things that will be included in the output file
function Course_Output(class_score, artifact_score, slo_score, student_evaluations)
{
  this.class_score = class_score;
  this.artifact_score = artifact_score;
  this.slo_score = slo_score;
  this.student_evaluations = student_evaluations;
}
 
// Set course score
Course_Output.prototype.setClassScore = function (class_score)
{
  this.class_score = class_score;
};
 
// Set artifact score
Course_Output.prototype.setArtifactScore = function (artifact_score)
{
  this.artifact_score = artifact_score;
};
 
// Set course score
Course_Output.prototype.setSLOScore = function (slo_score)
{
  this.slo_score = slo_score;
};
 
// Set student evaluations
Course_Output.prototype.setStudentEvaluations = function (student_evaluations)
{
  this.student_evaluations = student_evaluations;
};
 
// Checks to maker sure all fields are not null before writing them to file
Course_Output.prototype.isValid = function()
{
  if (this.class_score !== null && this.artifact_score !== null && this.course_score !== null && this.student_evaluations !== null)
  {
    return true;
  } else {
    {
      return false;
    }
  }
}
 
// Write object to string
Course_Output.prototype.toString = function()
{
  return "Course Score: " + this.class_score + "\n" + "Artifact Score: " + this.artifact_score + "\n" + "SLO Score: " + this.slo_score + "\n" + "Student Evaluations: " + this.student_evaluations;
}
 
module.exports = Course_Output;