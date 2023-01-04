import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

type ViwerPage = { initialValue?: string | undefined };

export default function ViewerPage(props: ViwerPage) {
  return <Viewer initialValue={props.initialValue} />;
}
