oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @londelo/tm_tools
$ tmt COMMAND
running command...
$ tmt (--version)
@londelo/tm_tools/0.0.0 darwin-arm64 node-v18.0.0
$ tmt --help [COMMAND]
USAGE
  $ tmt COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tmt help [COMMAND]`](#tmt-help-command)
* [`tmt plugins`](#tmt-plugins)
* [`tmt plugins:install PLUGIN...`](#tmt-pluginsinstall-plugin)
* [`tmt plugins:inspect PLUGIN...`](#tmt-pluginsinspect-plugin)
* [`tmt plugins:install PLUGIN...`](#tmt-pluginsinstall-plugin-1)
* [`tmt plugins:link PLUGIN`](#tmt-pluginslink-plugin)
* [`tmt plugins:uninstall PLUGIN...`](#tmt-pluginsuninstall-plugin)
* [`tmt plugins:uninstall PLUGIN...`](#tmt-pluginsuninstall-plugin-1)
* [`tmt plugins:uninstall PLUGIN...`](#tmt-pluginsuninstall-plugin-2)
* [`tmt plugins update`](#tmt-plugins-update)
* [`tmt test [FILE]`](#tmt-test-file)

## `tmt help [COMMAND]`

Display help for tmt.

```
USAGE
  $ tmt help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for tmt.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `tmt plugins`

List installed plugins.

```
USAGE
  $ tmt plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ tmt plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `tmt plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tmt plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ tmt plugins add

EXAMPLES
  $ tmt plugins:install myplugin 

  $ tmt plugins:install https://github.com/someuser/someplugin

  $ tmt plugins:install someuser/someplugin
```

## `tmt plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ tmt plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ tmt plugins:inspect myplugin
```

## `tmt plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tmt plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ tmt plugins add

EXAMPLES
  $ tmt plugins:install myplugin 

  $ tmt plugins:install https://github.com/someuser/someplugin

  $ tmt plugins:install someuser/someplugin
```

## `tmt plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ tmt plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ tmt plugins:link myplugin
```

## `tmt plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tmt plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tmt plugins unlink
  $ tmt plugins remove
```

## `tmt plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tmt plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tmt plugins unlink
  $ tmt plugins remove
```

## `tmt plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tmt plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tmt plugins unlink
  $ tmt plugins remove
```

## `tmt plugins update`

Update installed plugins.

```
USAGE
  $ tmt plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `tmt test [FILE]`

describe the command here

```
USAGE
  $ tmt test [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ tmt test
```

_See code: [dist/commands/test.ts](https://github.com/tm_tools/hello-world/blob/v0.0.0/dist/commands/test.ts)_
<!-- commandsstop -->
