import GenericField from './genericField';
import * as yup from 'yup';
import moment from 'moment';
import i18n from '../../../i18n/index';

export default class DateRangeField extends GenericField {
  forFilter() {
    return yup
      .array()
      .of(
        yup
          .mixed()
          .nullable(true)
          .label(this.label)
          .test('is-date', i18n.t('validation.mixed.default'), value => {
            if (!value) {
              return true;
            }

            return moment(value, 'YYYY-MM-DD').isValid();
          })
          .transform(value =>
            value ? moment(value).format('YYYY-MM-DD') : null,
          ),
      )
      .label(this.label);
  }
}