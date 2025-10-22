import { PracticeAreaCard } from '../PracticeAreaCard';
import { practiceAreas } from '@/mockData';

export default function PracticeAreaCardExample() {
  return (
    <div className="p-8">
      <PracticeAreaCard area={practiceAreas[0]} />
    </div>
  );
}
