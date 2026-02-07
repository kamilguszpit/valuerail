module.exports = {
    branches: [
        "main",
        { name: "develop", channel: "develop", prerelease: "beta" }
    ],
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                "preset": "conventionalcommits",
                "releaseRules": [
                    { "type": "feat", "release": "minor" },
                    { "type": "fix", "release": "patch" },
                    { "type": "perf", "release": "patch" },
                    { "type": "refactor", "release": "patch" },
                    { "type": "style", "release": "patch" },
                    { "type": "docs", "release": "patch" },
                    { "type": "build", "release": "patch" },
                    { "type": "ci", "release": "patch" },
                    { "type": "chore", "release": "patch" },
                    { "type": "test", "release": "patch" },
                    { "type": "revert", "release": "patch" }
                ]
            }
        ],
        [
            "@semantic-release/release-notes-generator",
            {
                "preset": "conventionalcommits"
            }
        ],
        "@semantic-release/changelog",
        [
            "@semantic-release/npm",
            {
                "pkgRoot": "packages/cli",
                "prepareCmd": "cd packages/cli && npm run build:npm"
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
