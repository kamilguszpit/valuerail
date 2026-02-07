module.exports = {
    branches: ["main"],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        [
            "@semantic-release/npm",
            {
                "pkgRoot": "packages/cli"
            }
        ],
        "@semantic-release/github",
        [
            "@semantic-release/git",
            {
                "assets": ["CHANGELOG.md", "packages/cli/package.json"],
                "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }
        ]
    ]
};
