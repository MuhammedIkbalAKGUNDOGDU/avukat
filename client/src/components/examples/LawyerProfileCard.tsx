import { LawyerProfileCard } from '../LawyerProfileCard';
import { lawyers } from '@/mockData';

export default function LawyerProfileCardExample() {
  return (
    <div className="p-8">
      <div className="max-w-sm">
        <LawyerProfileCard lawyer={lawyers[0]} />
      </div>
    </div>
  );
}
