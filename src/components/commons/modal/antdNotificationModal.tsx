import { CheckCircleOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import { styleSet } from '../../../commons/styles/styleSet';

interface NotificationModalProps {
  message: string;
}

const AntdNotificationModal = (props: NotificationModalProps) => {
  notification.open({
    message: props.message,
    icon: <CheckCircleOutlined style={{ color: styleSet.colors.primary }} />,
    style: { paddingBottom: '0.5rem' },
  });
};

export default AntdNotificationModal;
