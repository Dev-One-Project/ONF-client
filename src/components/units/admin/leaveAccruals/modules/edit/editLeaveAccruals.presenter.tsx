import * as S from '../../leaveAccruals.styles';
import { DatePicker, Divider } from 'antd';
import { styleSet } from '../../../../../../commons/styles/styleSet';
import Btn01 from '../../../../../commons/button/btn01';
import Input01 from '../../../../../commons/input/input01';
import Select02 from '../../../../../commons/input/select02';
import Textarea from '../../../../../commons/textarea';
import dayjs from 'dayjs';
import { IEditLeaveAccrualsPresenterProps } from './editLeaveAccruals.types';
import { Controller } from 'react-hook-form';

const EditLeaveAccrualsPresenter = (
  props: IEditLeaveAccrualsPresenterProps,
) => {
  const dateFormat = 'YYYY-MM-DD';

  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <S.ModalWrapper>
        <S.ModalField>
          <div>
            <S.Label>직원</S.Label>
            <Select02
              category={['최고관리자', '직원']}
              data={props.memberData}
              register={props.register('memberId')}
              name={'memberId'}
              setValue={props.setValue}
              defaultValue={props.data?.member.id}
            />
          </div>
          <div>
            <S.Label>발생 일수</S.Label>
            <Input01
              type="number"
              width="133px"
              register={props.register('vacationAll')}
            />
          </div>
          <div>
            <S.Label>발생 시점</S.Label>
            <Controller
              control={props.control}
              name="startingPoint"
              defaultValue={new Date()}
              render={({ field: { onChange } }) => (
                <DatePicker
                  style={{ borderRadius: '0' }}
                  defaultValue={dayjs(new Date(props.data.startingPoint))}
                  onChange={(value: any) => onChange(value?.$d)}
                  format={dateFormat}
                />
              )}
            />
          </div>
          <div>
            <S.Label>만료 시점</S.Label>
            <Controller
              control={props.control}
              name="expirationDate"
              defaultValue={new Date()}
              render={({ field: { onChange } }) => (
                <DatePicker
                  style={{ borderRadius: '0' }}
                  defaultValue={dayjs(new Date(props.data.expirationDate))}
                  onChange={(value: any) => onChange(value?.$d)}
                  format={dateFormat}
                />
              )}
            />
          </div>
        </S.ModalField>
        <S.MemoBox>
          <S.Label>메모</S.Label>
          <Textarea height="4rem" register={props.register('description')} />
        </S.MemoBox>
      </S.ModalWrapper>
      <Divider style={{ margin: '1.8rem 0 0', transform: 'scaleX(1.07)' }} />
      <S.ModalFooter>
        <Btn01
          text="삭제하기"
          bdC="#ddd"
          color="red"
          onClick={props.onClickDelete}
        />
        <S.BtnBox>
          <Btn01
            type={'button'}
            text="닫기"
            bdC="#ddd"
            onClick={props.onClickCloseModal}
          />
          <Btn01
            type={'submit'}
            text="수정하기"
            color="#fff"
            bgC={styleSet.colors.primary}
            bdC={styleSet.colors.primary}
          />
        </S.BtnBox>
      </S.ModalFooter>
    </form>
  );
};

export default EditLeaveAccrualsPresenter;
