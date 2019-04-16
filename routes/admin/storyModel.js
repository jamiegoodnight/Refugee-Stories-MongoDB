const db = require("../../data/config");

module.exports = {
  approveStory,
  deleteStory,
  getPendingStories,
  rejectStory
};

function approveStory(id, story) {
  return new Promise(async (resolve, reject) => {});
}

function deleteStory(id) {}

function getPendingStories() {}

function rejectStory(id) {}
