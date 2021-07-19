import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';
// import { AwesomeReport } from "jasmine-awesome-report";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { AwesomeReport } = require('jasmine-awesome-report');

export const reporter = () => {
  jasmine.getEnv().addReporter(
    new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY,
      },
    })
  );
  const config = {
    fullPath: 'awesome-report',
    fileName: 'report',
    merge: true,
  };
  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
};
