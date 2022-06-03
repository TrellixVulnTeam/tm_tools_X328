"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
class Test extends core_1.Command {
    async run() {
        var _a;
        const { args, flags } = await this.parse(Test);
        const name = (_a = flags.name) !== null && _a !== void 0 ? _a : 'world';
        this.log(`hello ${name} from /Users/Brodie.Balser/Documents/londelo/tm_tools/src/commands/test.ts`);
        if (args.file && flags.force) {
            this.log(`you input --force and --file: ${args.file}`);
        }
    }
}
exports.default = Test;
Test.description = 'describe the command here';
Test.examples = [
    '<%= config.bin %> <%= command.id %>',
];
Test.flags = {
    // flag with a value (-n, --name=VALUE)
    name: core_1.Flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: core_1.Flags.boolean({ char: 'f' }),
};
Test.args = [{ name: 'file' }];
