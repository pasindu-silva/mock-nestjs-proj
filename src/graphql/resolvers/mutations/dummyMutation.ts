import { IDummyMutationArgs } from '../typings';

async function dummyMutation(
  _: any,
  args: IDummyMutationArgs,
): Promise<boolean> {
  const { input: { firstInput, secondInput } } = args;

  const tempVariable = 5;
  if( tempVariable === 12 ){
    console.log("This is an error");
  }

  in for test 
  console.log("test")

  console.log(`Mutation with inputs firstInput=${firstInput} and secondInput=${secondInput}`);

  return true;
}

export default dummyMutation;
