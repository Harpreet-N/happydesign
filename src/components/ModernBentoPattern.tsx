import { useEffect, useRef, useState } from 'react';

export function ModernBentoPattern() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: 1,
      type: 'brand',
      size: 'medium',
      bgColor: 'bg-purple',
      content: {
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4L20 12L28 12L22 18L24 26L16 22L8 26L10 18L4 12L12 12L16 4Z" fill="currentColor"/>
          </svg>
        ),
        title: 'Portfolio',
        subtitle: '2025'
      }
    },
    {
      id: 2,
      type: 'image',
      size: 'large',
      bgColor: 'bg-lime',
      content: {
        title: 'Creative',
        subtitle: 'Solutions',
        description: 'Innovative design approaches for modern challenges'
      }
    },
    {
      id: 3,
      type: 'feature',
      size: 'medium',
      bgColor: 'bg-white',
      content: {
        icon: (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M14 10V14L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ),
        title: 'UX Design',
        subtitle: 'User-Centered'
      }
    },
    {
      id: 4,
      type: 'stats',
      size: 'small',
      bgColor: 'bg-white',
      content: {
        number: '50+',
        label: 'Projects',
        sublabel: 'Completed'
      }
    },
    {
      id: 5,
      type: 'team',
      size: 'medium',
      bgColor: 'bg-white',
      content: {
        title: 'Our',
        subtitle: 'creators',
        avatars: [
          { color: 'bg-purple', initial: 'J' },
          { color: 'bg-lime', initial: 'A' },
          { color: 'bg-dark', initial: 'M' }
        ]
      }
    },
    {
      id: 6,
      type: 'circular',
      size: 'medium',
      bgColor: 'bg-dark',
      content: {
        text: 'explore now how it works join us',
        centerIcon: (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2"/>
          </svg>
        )
      }
    },
    {
      id: 7,
      type: '3d',
      size: 'medium',
      bgColor: 'bg-purple',
      content: {
        title: '3D',
        subtitle: 'Visuals'
      }
    }
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'col-span-1 row-span-1 h-48';
      case 'medium':
        return 'col-span-1 row-span-1 h-64';
      case 'large':
        return 'col-span-2 row-span-1 h-64';
      default:
        return 'col-span-1 row-span-1 h-64';
    }
  };

  const getTextColor = (bgColor: string) => {
    switch (bgColor) {
      case 'bg-purple':
      case 'bg-dark':
        return 'text-white';
      case 'bg-lime':
        return 'text-black';
      default:
        return 'text-black';
    }
  };

  const renderCardContent = (card: any) => {
    const textColor = getTextColor(card.bgColor);
    
    switch (card.type) {
      case 'brand':
        return (
          <div className="p-8 h-full flex flex-col justify-center items-center text-center">
            <div className={`mb-4 ${textColor}`}>
              {card.content.icon}
            </div>
            <h3 className={`font-impact text-2xl ${textColor} mb-1`}>
              {card.content.title}
            </h3>
            <p className={`font-roboto font-medium ${textColor} opacity-80`}>
              {card.content.subtitle}
            </p>
          </div>
        );

      case 'image':
        return (
          <div className="p-8 h-full flex flex-col justify-center">
            <h3 className={`font-impact text-4xl ${textColor} leading-none mb-2`}>
              {card.content.title}
            </h3>
            <h4 className={`font-impact text-4xl ${textColor} leading-none mb-4`}>
              {card.content.subtitle}
            </h4>
            <p className={`font-roboto ${textColor} opacity-80 max-w-md`}>
              {card.content.description}
            </p>
          </div>
        );

      case 'feature':
        return (
          <div className="p-6 h-full flex flex-col justify-center items-center text-center">
            <div className={`mb-4 text-purple`}>
              {card.content.icon}
            </div>
            <h3 className={`font-roboto font-bold text-xl ${textColor} mb-1`}>
              {card.content.title}
            </h3>
            <p className={`font-roboto text-sm ${textColor} opacity-70`}>
              {card.content.subtitle}
            </p>
          </div>
        );

      case 'stats':
        return (
          <div className="p-6 h-full flex flex-col justify-center text-center">
            <div className="font-impact text-3xl text-purple mb-1">
              {card.content.number}
            </div>
            <div className="font-roboto font-bold text-black text-sm mb-1">
              {card.content.label}
            </div>
            <div className="font-roboto text-xs text-gray-500">
              {card.content.sublabel}
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="font-roboto font-bold text-xl text-black mb-1">
                {card.content.title}
              </h3>
              <h4 className="font-roboto font-bold text-xl text-black">
                {card.content.subtitle}
              </h4>
            </div>
            <div className="flex space-x-2">
              {card.content.avatars.map((avatar: any, index: number) => (
                <div
                  key={index}
                  className={`w-10 h-10 ${avatar.color} rounded-full flex items-center justify-center`}
                >
                  <span className="font-roboto font-bold text-white text-sm">
                    {avatar.initial}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'circular':
        return (
          <div className="p-6 h-full flex items-center justify-center">
            <div className="relative w-40 h-40">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160">
                <defs>
                  <path id="circle" d="M80,80 m-60,0 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0"/>
                </defs>
                <text className="fill-white text-xs font-roboto" textLength="360">
                  <textPath href="#circle" startOffset="0%">
                    {card.content.text}
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                  {card.content.centerIcon}
                </div>
              </div>
            </div>
          </div>
        );

      case '3d':
        return (
          <div className="p-8 h-full flex flex-col justify-center items-center">
            <div className="w-20 h-20 mb-4 bg-white/20 rounded-3xl flex items-center justify-center">
              <div className="w-12 h-12 bg-white/30 rounded-xl transform rotate-12"></div>
            </div>
            <h3 className="font-impact text-3xl text-white mb-1">
              {card.content.title}
            </h3>
            <p className="font-roboto text-white opacity-80">
              {card.content.subtitle}
            </p>
          </div>
        );

      case 'process':
        return null;

      default:
        return null;
    }
  };

  // @ts-ignore
  return (
    <section className="min-h-screen pt-24 pb-20 px-8 md:px-16 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="mb-16">
        <div className="mb-6">
          {/* ... remove this code ... */}
        </div>
        <h1 className="font-impact text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-8">
          There is something
          <br />
          <span className="text-purple">creative</span> for you
        </h1>
        <p className="text-lg md:text-xl font-roboto text-muted-foreground leading-relaxed max-w-2xl mb-12">
          Discover bold digital experiences that push boundaries and create 
          lasting impact through innovative design and cutting-edge technology.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-min">
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => cardsRef.current[index] = el}
            data-index={index}
            className={`
              ${getSizeClasses(card.size)} 
              ${card.bgColor} 
              rounded-3xl 
              shadow-lg 
              overflow-hidden 
              transition-all 
              duration-700 
              ease-out 
              hover:shadow-2xl 
              hover:-translate-y-2
              cursor-pointer
              ${visibleCards.has(index)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
              }
            `}
            style={{
              transitionDelay: `${index * 100}ms`
            }}
          >
            {renderCardContent(card)}
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      {/* ... remove this code ... */}
    </section>
  );
}