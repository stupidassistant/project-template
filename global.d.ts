declare function handleRequest(st: string, f: LamabdaFunction): void;

type LamabdaFunction = (req: LambdaRequest, res: LamdaResponce) => LambdaResult;

type LambdaRequest = {};

type LamdaResponce = {
  speak(text: string): LamdaResponce
  text(text: string): LamdaResponce
  send(): LambdaResult
};

type LambdaResult = {};