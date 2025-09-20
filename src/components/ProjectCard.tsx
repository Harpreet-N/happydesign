import type {Project} from '../data/projects';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  project: Project;
  height?: string;
  onClick: () => void;
}

export function ProjectCard({ project, height = 'h-[500px]', onClick }: ProjectCardProps) {
  return (
    <Card 
      className={`group cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 ${height} bg-card flex flex-col`}
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative h-3/5 overflow-hidden">
        <ImageWithFallback
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content Section */}
      <div className="p-6 h-2/5 flex flex-col justify-between bg-card">
        {/* Header with title and year */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-impact tracking-tight text-foreground group-hover:text-purple transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-sm font-roboto font-medium text-muted-foreground">
            {project.year}
          </span>
        </div>
        
        {/* Category and description */}
        <div className="mb-4 flex-1">
          <p className="text-sm font-roboto text-muted-foreground mb-3 uppercase tracking-wide">
            {project.category}
          </p>
          <p className="text-sm font-roboto text-muted-foreground leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-xs px-3 py-1 font-roboto font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80"
            >
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge 
              variant="secondary" 
              className="text-xs px-3 py-1 font-roboto font-medium bg-secondary text-secondary-foreground"
            >
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
}