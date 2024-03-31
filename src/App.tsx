import parseJsonFile from './util/parser';
import docxConverter  from './util/docx-converter'
import { FormEvent } from 'react';
import { ConverterOptions } from './types/types';

function App() {
  console.log("App: Initialize");

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const elements = event.currentTarget.elements as HTMLFormControlsCollection & {
      cannotTell: HTMLInputElement;
      notChecked: HTMLInputElement;
      notPresent: HTMLInputElement;
      upload: HTMLInputElement;
    };

    const cannotTell = elements['cannotTell'];
    const notChecked = elements['notChecked'];
    const notPresent = elements['notPresent'];
    const upload = elements['upload'];

    const file = upload?.files?.[0];


    const options: ConverterOptions = {
      criteria: {
        exclude: {
          cannotTell: cannotTell.checked,
          notChecked: notChecked.checked,
          notPresent: notPresent.checked
        }
      }
    }

    if (file) {
      console.log("Submit: New File detected", file);
      console.log("Submit: Options detected", options);

      await parseJsonFile(file).then(report => {
        if (report !== null) {
          docxConverter(report, options);
        }
      });
    }
  }

  return (
    <>
      <main id={'content'}>
        <h1>WCAG JSON Report Converter</h1>
        <article className={'tool-info'}>
          <section>
            <h2>Informations on this tool</h2>
            <p>Upload the JSON Report from the <a href="https://www.w3.org/WAI/eval/report-tool">WCAG Report tool</a> and it
              will be transformed into a table and then converted to a word-document. Download will start automatically when done. </p>
            <p><strong>This tool is build on the Report Tool version 3.0.3</strong></p>
            <p>Every step is logged on the console</p>
          </section>
        </article>

        <section className={'form-wrapper'}>
          <h2>Upload form</h2>
          <form onSubmit={handleSubmit} className={'form'}>
            <section>
              <h3>Options</h3>
              <fieldset className={'fieldset'}>
                <legend>Choose which option to include or exclude</legend>

                <div className={'elementGroup'}>
                  <input id={'notChecked'} type="checkbox" name={'notChecked'}/>
                  <label htmlFor={'notChecked'}>
                    Exclude "Not Checked" criteria´s
                  </label>
                </div>

                <div className={'elementGroup'}>
                  <input id={'cannotTell'} type="checkbox" name={'cannotTell'}/>
                  <label htmlFor={'cannotTell'}>
                    Exclude "Cannot tell" criteria´s
                  </label>
                </div>

                <div className={'elementGroup'}>
                  <input id={'notPresent'} type="checkbox" name={'notPresent'}/>
                  <label htmlFor={'notPresent'}>
                    Exclude "Not Present" criteria´s
                  </label>
                </div>

              </fieldset>
            </section>
            <section>
              <h3>Data</h3>
              <div className={'elementGroup upload'}>
                <label htmlFor={'upload'}>Upload your JSON file</label>
                <input id={'upload'} type="file" name={'upload'} accept={'application/json'} />
              </div>
            </section>
            <button type={'submit'}>Convert & Download</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default App
