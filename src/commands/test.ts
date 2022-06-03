import {Command, Flags} from '@oclif/core'
// const { cli } = require("cli-ux"),
// { Command, flags } = require('@oclif/command'),
// fs = require("fs-extra"),
// path = require("path"),
// shell = require('shelljs'),
// chalk = require('chalk'),
// Sound = require('play-sound');

export default class Test extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Test)

    // run command or start new one
    // search though files for Debug(verifiedfans:
    // whats debug
    // whats tag
    // store settings
    // run command

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /Users/Brodie.Balser/Documents/londelo/tm_tools/src/commands/test.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
