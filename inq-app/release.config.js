module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/ThaiQui/React-CICD",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github",
    ]
}
