import OpenAI from 'openai';

/** load OPENAI API KEY */

/** OpenAI config */
export default new OpenAI({
  apiKey: TODO_READ_FROM_ENV,
  dangerouslyAllowBrowser: true
});

