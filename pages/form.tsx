import { EndOfJourney, Question } from '../components';
import { QuestionType } from '../components/questions/QuestionProps';
import { NoBenefit } from '../content/EndOfJourney';

const questions = [];

export default function Form() {
  return (
    <div className='w-full'>
      <div className='p-2'>
        <Question
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          options={[
            { key: 'yes', label: 'Yes' },
            { key: 'no', label: 'No' },
          ]}
          question='Have you been experiencing any of the following symptoms?'
          questionKey='yesno0'
          type={QuestionType.Radio}
          onAnswer={() => {
            /* Possibly show the next question depending on answer */
          }}
        />
      </div>
      <div className='p-2'>
        <Question
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          options={[
            { key: 'yes', label: 'Yes' },
            { key: 'no', label: 'No' },
          ]}
          question='Have you been experiencing any of the following symptoms?'
          questionKey='yesno1'
          type={QuestionType.Radio}
          onAnswer={() => {
            /* Possibly show the next question depending on answer */
          }}
        />
      </div>
      <div className='p-2'>
        <Question
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          options={[
            { key: 'cold', label: 'Cold' },
            { key: 'flu', label: 'Flu' },
            { key: 'headaches', label: 'Headaches' },
          ]}
          question='Checkbox question?'
          questionKey='multi1'
          type={QuestionType.Checkbox}
          onAnswer={values => {
            /* Possibly show the next question depending on answer */
          }}
        />
      </div>
      {/* <EndOfJourney
        title={NoBenefit.title}
        content={NoBenefit.content}
      /> */}
    </div>
  );
}
