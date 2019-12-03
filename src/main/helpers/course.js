var express = require('express');
var router = express.Router();
const fs = require('fs');
 
// helper function takes an array of integers reprenting each SLO score for the entire class and returns the average
function calculateClassScore(class_scores)
{
  var sum = 0
  for (index = 0; index < class_scores.length; index++)
  {
    sum += class_scores[index]
  }
  var result = sum/class_scores.length
  return result
}
 
// helper function takes an array of booleans representing whether or not each student met/exceeded an SLO and returns the
// percentage of those who did
function calculateArtifactScore(artifact_scores)
{
  var sum = 0
  for (index = 0; index < artifact_scores.length; index++)
  {
    if ( artifact_scores[index] == true )
    {
      sum++
    }
  }
  var result = sum/artifact_scores.length
  return result
}
 
// helper function that takes 3 arrays of booleans representing student performance for each of the 3 artifacts and returns the average
// artifact score of the 3
function calculateSLOScore(artifact_scores_1, artifact_scores_2, artifact_scores_3)
{
  var result1 = calculateArtifactScore(artifact_scores_1)
  var result2 = calculateArtifactScore(artifact_scores_2)
  var result3 = calculateArtifactScore(artifact_scores_3)
 
  var sum = result1 + result2 + result3
  var result = sum/3
  return result
}
 
// helper function that will update all affected scores when a new SLO is updated, returns an array containing the results
// of each function
function updateAffectedScores(class_scores, artifact_scores_1, artifact_scores_2, artifact_scores_3)
{
  var classScore = calculateClassScore(class_scores)
  var artifactScore = calculateArtifactScore(artifact_scores_1)
  var sloScore = calculateSLOScore(artifact_scores_1, artifact_scores_2, artifact_scores_3)
 
  var results = [classScore, artifactScore, sloScore]
  return results
}
 
module.exports.calculateClassScore=calculateClassScore;
module.exports.calculateArtifactScore=calculateArtifactScore;
module.exports.calculateSLOScore=calculateSLOScore;
module.exports.updateAffectedScores=updateAffectedScores;