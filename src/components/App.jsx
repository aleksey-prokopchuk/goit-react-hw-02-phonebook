import Phonebook from './Phonebook/Phonebook';
// import css from './index.module.css';

export const App = () => {
  // console.log(Phonebook);
  // const { form, form_lable, btn_submit } = css;
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <Phonebook />
    </div>
  );
};
