import { Star } from 'lucide-react';

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-navy-100">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-navy-200'
            }`}
          />
        ))}
      </div>
      <p className="text-navy-600 mb-4 leading-relaxed">"{review.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-sm">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-navy-800 text-sm">{review.name}</p>
          <p className="text-navy-400 text-xs">{review.location}</p>
        </div>
      </div>
      {review.service && (
        <span className="inline-block mt-3 px-3 py-1 text-xs font-medium text-primary-600 bg-primary-50 rounded-full">
          {review.service}
        </span>
      )}
    </div>
  );
}
