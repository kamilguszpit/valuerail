## [1.0.0-beta.9](https://github.com/kamilguszpit/valuerail/compare/v1.0.0-beta.8...v1.0.0-beta.9) (2026-02-07)

### Bug Fixes

* use @semantic-release/exec plugin to build CLI with correct version injection ([a599e0c](https://github.com/kamilguszpit/valuerail/commit/a599e0ce8ace9a724acd904c322117b13005b1a5))
* use find command to locate cfonts fonts in CI environment ([c55b321](https://github.com/kamilguszpit/valuerail/commit/c55b321533e1f03530a3bba95e78e6c77652263e))
* use npm install for semantic-release compatibility ([5c4c1ab](https://github.com/kamilguszpit/valuerail/commit/5c4c1abee71649645a0442b12c083790c22d3375))

## [1.0.0-beta.8](https://github.com/kamilguszpit/valuerail/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2026-02-07)

### Bug Fixes

* enable semantic-release for all commit types and fix version injection in CLI build ([da09733](https://github.com/kamilguszpit/valuerail/commit/da0973390d83cff1d8367b9edf5aec8e51b85dd3))

# [1.0.0-beta.7](https://github.com/kamilguszpit/valuerail/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2026-02-07)


### Features

* Implement a `GoodbyeScreen` component shown on CLI exit, displaying version, CWD, and project status, and remove an unnecessary console clear. ([467a52c](https://github.com/kamilguszpit/valuerail/commit/467a52c8538be0db242a64605b2c1b8a15f89a88))

# [1.0.0-beta.6](https://github.com/kamilguszpit/valuerail/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2026-02-07)


### Features

* Introduce new `cfonts` font styles, implement an `ErrorBoundary` for the CLI banner, and refine the font build process. ([beff7ae](https://github.com/kamilguszpit/valuerail/commit/beff7aefc5f9272491bccd2527cc44e84c066ae5))

# [1.0.0-beta.5](https://github.com/kamilguszpit/valuerail/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2026-02-07)


### Bug Fixes

* **ui:** restore console.clear and fix dev version display ([44ed920](https://github.com/kamilguszpit/valuerail/commit/44ed9203381a3f67434a9c85f5d356a0634f4a6c))

# [1.0.0-beta.4](https://github.com/kamilguszpit/valuerail/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2026-02-07)


### Bug Fixes

* bundle deps, copy fonts, and inject version to resolve runtime issues ([33ad6d4](https://github.com/kamilguszpit/valuerail/commit/33ad6d4ba052f9e1db583c244e9f2b54f6752d7a))

# [1.0.0-beta.3](https://github.com/kamilguszpit/valuerail/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2026-02-07)


### Bug Fixes

* externalize cli dependencies to resolve missing font assets ([466f94a](https://github.com/kamilguszpit/valuerail/commit/466f94a8c19470d6704067ac0fbf904c488bad5f))

# [1.0.0-beta.2](https://github.com/kamilguszpit/valuerail/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2026-02-07)


### Bug Fixes

* force release to verify npm publishing ([a50ffa1](https://github.com/kamilguszpit/valuerail/commit/a50ffa19227ee530ed950c8c59c92cd4e0f99924))

# 1.0.0-beta.1 (2026-02-07)


### Bug Fixes

* **ci:** replace all workspace:* protocols with file: paths for npm compatibility ([9e633dd](https://github.com/kamilguszpit/valuerail/commit/9e633dd4a3d9d2df4af160d326e337d75d8feb1e))
* **ci:** use --legacy-peer-deps for npm install to resolve ink version conflict ([6bf16e6](https://github.com/kamilguszpit/valuerail/commit/6bf16e67c6472426a29056c88244d98cf4f6fa9b))
* **ci:** use file protocol for workspaces to support npm release ([179fea9](https://github.com/kamilguszpit/valuerail/commit/179fea95648d13e16bd8f3095f7f31a367dafdf0))
* **ci:** use npm install for release job to ensure semantic-release compatibility ([6b7921c](https://github.com/kamilguszpit/valuerail/commit/6b7921c05421dd1282947538b93277df716448d8))


### Features

* introduce BSL 1.1 license and integrate a dedicated license view into the CLI. ([5d90ba4](https://github.com/kamilguszpit/valuerail/commit/5d90ba4b57188b6b6174652cb5248f56def401fe))
