import moment from 'moment';
import { buildRangeFilter } from '../../../filter_manager/lib/range';

export function createFilterDateHistogram(agg, key) {
  const start = moment(key);
  const interval = agg.buckets.getInterval();

  return buildRangeFilter(agg.params.field, {
    gte: start.valueOf(),
    lt: start.add(interval).valueOf(),
    format: 'epoch_millis'
  }, agg.vis.indexPattern);
}
