import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Editor } from '@toast-ui/react-editor';
import { IEditorPageProps } from '../write.types';
import { UPLOAD_SINGLE_FILE } from '../write.queries';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

export default function EditorPage(props: IEditorPageProps) {
  const [uploadSingleFile] = useMutation(UPLOAD_SINGLE_FILE);

  useEffect(() => {
    if (!props.contentsRef) return;
    if (props.contentsRef.current) {
      props.contentsRef.current.getInstance().removeHook('addImageBlobHook');
      props.contentsRef.current.getInstance().setHTML(props.initialValue);
      props.contentsRef.current
        .getInstance()
        .addHook('addImageBlobHook', (blob: Blob | File, callback: any) => {
          (async () => {
            const result = await uploadSingleFile({
              variables: {
                file: blob,
              },
            });
            callback(result.data.uploadSingleFile.url, 'alt text');
          })().catch((error) => {
            alert(error);
          });
          return false;
        });
    }
    return () => {};
  }, [props.contentsRef, props.initialValue, uploadSingleFile]);

  return (
    <Editor
      ref={props.contentsRef}
      height="100%"
      initialEditType="markdown"
      placeholder="내용을 입력해 주세요."
      hideModeSwitch={true}
      previewStyle="vertical"
      onChange={props.onChangeContents}
      language="ko-KR"
      initialValue={props.initialValue}
      plugins={[colorSyntax]}
      autofocus={false}
    />
  );
}
