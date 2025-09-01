import { ChevronRight, Home } from "lucide-react";
import { Link } from "wouter";

interface BreadcrumbItem {
  title: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center space-x-1 text-sm ${className}`} aria-label="Breadcrumb">
      <Link href="/">
        <div className="flex items-center text-text-medium hover:text-turquoise transition-colors cursor-pointer group" data-testid="breadcrumb-home">
          <Home className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
          <span className="sr-only">Inicio</span>
        </div>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-2 text-gold-light/60" />
          {item.href && !item.current ? (
            <Link href={item.href}>
              <span 
                className="text-text-medium hover:text-turquoise transition-colors cursor-pointer font-medium hover:scale-105 transform transition-transform"
                data-testid={`breadcrumb-item-${index}`}
              >
                {item.title}
              </span>
            </Link>
          ) : (
            <span 
              className={`font-medium ${
                item.current 
                  ? "text-turquoise gold-accent-subtle" 
                  : "text-text-medium"
              }`}
              aria-current={item.current ? "page" : undefined}
              data-testid={`breadcrumb-current-${index}`}
            >
              {item.title}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}