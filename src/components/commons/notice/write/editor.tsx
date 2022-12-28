import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
// import { useMutation } from '@apollo/client';
// import { UPLOAD_IMAGE } from "../register.queries";
// import { useEffect } from 'react';
import { IEditorPageProps } from './write.types';

export default function EditorPage(props: IEditorPageProps) {
  //   const { contentsRef, onChangeContents, initialValue } = P;
  //   const [uploadImage] = useMutation(UPLOAD_IMAGE);
  //   useEffect(() => {
  //     if (!contentsRef) return;
  //     if (contentsRef.current) {
  //       contentsRef.current.getInstance().removeHook('addImageBlobHook');
  //       contentsRef.current.getInstance().setHTML(initialValue);
  //       contentsRef.current
  //         .getInstance()
  //         .addHook('addImageBlobHook', (blob: Blob | File, callback: any) => {
  //           (async () => {
  //             const result = await uploadImage({
  //               variables: {
  //                 image: blob,
  //               },
  //             });
  //             callback(result.data.uploadImage.imageUrl, 'alt text');
  //           })().catch((error) => {
  //             alert(error);
  //           });
  //           return false;
  //         });
  //     }
  //     return () => {};
  //   }, [contentsRef]);
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
