export interface ICalendarElementProps {
  id: string;
  member?: any;
  startTime?: string;
  endTime?: string;
  workType?: string;
  companyName: string;
  color: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
