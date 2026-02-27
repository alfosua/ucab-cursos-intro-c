import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, PlayCircle, BookOpen, Presentation, Terminal, RotateCcw, Play, Github } from 'lucide-react';
import SlideViewer from './components/SlideViewer';
import ucabWide from '../assets/ucab_wide.png';
import ucabSquare from '../assets/ucab_square.png';

type Status = 'not-started' | 'in-progress' | 'completed';

interface CourseItem {
  id: number;
  module: string;
  topic: string;
  description: string;
  status: Status;
  link: string;
}

const initialData: CourseItem[] = [
  { id: 1, module: '1. Introducción', topic: '¿Qué es C?', description: 'Historia y características del lenguaje C.', status: 'not-started', link: '#' },
  { id: 2, module: '1. Introducción', topic: 'Entorno de Desarrollo', description: 'Instalación de GCC y configuración del IDE.', status: 'not-started', link: '#' },
  { id: 3, module: '1. Introducción', topic: 'Hola Mundo', description: 'Tu primer programa en C y estructura básica.', status: 'not-started', link: '#' },
  { id: 4, module: '1. Introducción', topic: 'Proyecto Práctico', description: 'Crea tu carta de presentación en la terminal.', status: 'not-started', link: '#' },
  { id: 5, module: '2. Conceptos Básicos', topic: 'Variables y Tipos', description: 'int, float, char, double y modificadores.', status: 'not-started', link: '#' },
  { id: 6, module: '2. Conceptos Básicos', topic: 'Operadores', description: 'Aritméticos, lógicos y relacionales.', status: 'not-started', link: '#' },
  { id: 7, module: '2. Conceptos Básicos', topic: 'Entrada y Salida', description: 'Uso de printf y scanf para interactuar.', status: 'not-started', link: '#' },
  { id: 8, module: '2. Conceptos Básicos', topic: 'Proyecto Práctico', description: 'Desarrolla una calculadora interactiva.', status: 'not-started', link: '#' },
  { id: 9, module: '3. Control de Flujo', topic: 'Condicionales', description: 'Uso de if, else if, else y switch.', status: 'not-started', link: '#' },
  { id: 10, module: '3. Control de Flujo', topic: 'Bucles', description: 'Estructuras for, while y do-while.', status: 'not-started', link: '#' },
  { id: 11, module: '3. Control de Flujo', topic: 'Proyecto Práctico', description: 'Juego de adivinar el número secreto.', status: 'not-started', link: '#' },
  { id: 12, module: '4. Funciones', topic: 'Definición y Uso', description: 'Creación de funciones y retorno de valores.', status: 'not-started', link: '#' },
  { id: 13, module: '4. Funciones', topic: 'Paso de Parámetros', description: 'Diferencia entre paso por valor y referencia.', status: 'not-started', link: '#' },
  { id: 14, module: '4. Funciones', topic: 'Librerías y Cabeceras', description: 'Directiva #include y archivos .h estándar.', status: 'not-started', link: '#' },
  { id: 15, module: '4. Funciones', topic: 'Proyecto Práctico', description: 'Conversor de unidades modular.', status: 'not-started', link: '#' },
  { id: 16, module: '5. Arreglos', topic: 'Arreglos Unidimensionales', description: 'Declaración e iteración de arreglos.', status: 'not-started', link: '#' },
  { id: 17, module: '5. Arreglos', topic: 'Cadenas (Strings)', description: 'Arreglos de caracteres y <string.h>.', status: 'not-started', link: '#' },
  { id: 18, module: '5. Arreglos', topic: 'Proyecto Práctico', description: 'Gestor de calificaciones de estudiantes.', status: 'not-started', link: '#' },
  { id: 19, module: '6. Punteros', topic: 'Conceptos Básicos', description: 'Direcciones de memoria y el operador * y &.', status: 'not-started', link: '#' },
  { id: 20, module: '6. Punteros', topic: 'Aritmética de Punteros', description: 'Navegación de arreglos usando punteros.', status: 'not-started', link: '#' },
  { id: 21, module: '6. Punteros', topic: 'Proyecto Práctico', description: 'Intercambio seguro de variables.', status: 'not-started', link: '#' },
  { id: 22, module: '7. Conceptos Avanzados', topic: 'Structs', description: 'Agrupación de datos heterogéneos.', status: 'not-started', link: '#' },
  { id: 23, module: '7. Conceptos Avanzados', topic: 'Memoria Dinámica', description: 'Asignación de memoria en tiempo de ejecución.', status: 'not-started', link: '#' },
  { id: 24, module: '7. Conceptos Avanzados', topic: 'Archivos', description: 'Manejo de archivos con fopen, fprintf, fscanf.', status: 'not-started', link: '#' },
  { id: 25, module: '7. Conceptos Avanzados', topic: 'Proyecto Final', description: 'Sistema integral de inventario.', status: 'not-started', link: '#' },
];

export default function App() {
  const [data, setData] = useState<CourseItem[]>(() => {
    const saved = localStorage.getItem('courseData');
    return saved ? JSON.parse(saved) : initialData;
  });
  const [activeTopicId, setActiveTopicId] = useState<number | null>(null);
  const [startAtEnd, setStartAtEnd] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showCreditsModal, setShowCreditsModal] = useState(false);
  const [pendingTransition, setPendingTransition] = useState<{targetId: number, module: string, startAtEnd: boolean} | null>(null);
  const [lastSeen, setLastSeen] = useState<{topicId: number, slideIndex: number} | null>(() => {
    const saved = localStorage.getItem('lastSeen');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem('courseData', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (lastSeen) {
      localStorage.setItem('lastSeen', JSON.stringify(lastSeen));
    } else {
      localStorage.removeItem('lastSeen');
    }
  }, [lastSeen]);

  useEffect(() => {
    if (activeTopicId !== null) {
      document.body.style.overflow = 'hidden';
      setData(prev => prev.map(item => 
        (item.id === activeTopicId && item.status === 'not-started') 
          ? { ...item, status: 'in-progress' } 
          : item
      ));
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeTopicId]);

  const toggleStatus = (id: number) => {
    setData(data.map(item => {
      if (item.id === id) {
        const nextStatus: Record<Status, Status> = {
          'not-started': 'in-progress',
          'in-progress': 'completed',
          'completed': 'not-started'
        };
        return { ...item, status: nextStatus[item.status] };
      }
      return item;
    }
    ));
  };

  const handleCompleteTopic = (id: number) => {
    setData(prev => prev.map(item => 
      item.id === id ? { ...item, status: 'completed' } : item
    ));
  };

  useEffect(() => {
    if (pendingTransition) {
      const timer = setTimeout(() => {
        setStartAtEnd(pendingTransition.startAtEnd);
        setActiveTopicId(pendingTransition.targetId);
        setPendingTransition(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [pendingTransition]);

  const skipTransition = () => {
    if (pendingTransition) {
      setStartAtEnd(pendingTransition.startAtEnd);
      setActiveTopicId(pendingTransition.targetId);
      setPendingTransition(null);
    }
  };

  const navigateToTopic = (targetId: number, currentId: number | null, startAtEndFlag: boolean = false, showTransition: boolean = true) => {
    const target = data.find(t => t.id === targetId);
    const current = currentId ? data.find(t => t.id === currentId) : null;

    if (showTransition && target && (!current || current.module !== target.module)) {
      setActiveTopicId(null);
      setPendingTransition({ targetId, module: target.module, startAtEnd: startAtEndFlag });
    } else {
      setStartAtEnd(startAtEndFlag);
      setActiveTopicId(targetId);
    }
  };

  const handleNextTopic = (currentId: number) => {
    const currentIndex = data.findIndex(item => item.id === currentId);
    if (currentIndex >= 0 && currentIndex < data.length - 1) {
      navigateToTopic(data[currentIndex + 1].id, currentId, false, true);
    } else {
      setActiveTopicId(null);
      setShowCreditsModal(true);
    }
  };

  const handlePrevTopic = (currentId: number) => {
    const currentIndex = data.findIndex(item => item.id === currentId);
    if (currentIndex > 0) {
      navigateToTopic(data[currentIndex - 1].id, currentId, true, true);
    }
  };

  const handleStartContinue = () => {
    if (lastSeen) {
      navigateToTopic(lastSeen.topicId, null, false, true);
    } else {
      const firstPending = data.find(item => item.status !== 'completed');
      navigateToTopic(firstPending ? firstPending.id : data[0].id, null, false, true);
    }
  };

  const handleResetProgress = () => {
    setShowResetConfirm(true);
  };

  const confirmReset = () => {
    setData(initialData);
    setLastSeen(null);
    localStorage.removeItem('courseData');
    localStorage.removeItem('lastSeen');
    setShowResetConfirm(false);
  };

  const getStatusIcon = (status: Status) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="w-4 h-4" />;
      case 'in-progress': return <PlayCircle className="w-4 h-4" />;
      case 'not-started': return <Circle className="w-4 h-4" />;
    }
  };

  const getStatusText = (status: Status) => {
    switch (status) {
      case 'completed': return 'Completado';
      case 'in-progress': return 'En progreso';
      case 'not-started': return 'No iniciado';
    }
  };

  const getStatusBadgeClass = (status: Status) => {
    switch (status) {
      case 'completed': return 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20 hover:bg-emerald-500/20';
      case 'in-progress': return 'bg-amber-500/10 text-amber-700 border-amber-500/20 hover:bg-amber-500/20';
      case 'not-started': return 'bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200';
    }
  };

  const progress = Math.round((data.filter(d => d.status === 'completed').length / data.length) * 100);
  const activeTopic = activeTopicId ? data.find(t => t.id === activeTopicId) : null;
  const activeTopicIndex = activeTopicId ? data.findIndex(t => t.id === activeTopicId) : -1;
  const nextTopic = activeTopicIndex >= 0 && activeTopicIndex < data.length - 1 ? data[activeTopicIndex + 1] : null;
  const prevTopic = activeTopicIndex > 0 ? data[activeTopicIndex - 1] : null;
  const nextTopicIsProject = nextTopic ? nextTopic.topic.includes('Proyecto') : false;
  const nextTopicIsNewChapter = nextTopic && activeTopic ? nextTopic.module !== activeTopic.module : false;
  const prevTopicIsNewChapter = prevTopic && activeTopic ? prevTopic.module !== activeTopic.module : false;

  return (
    <>
      {activeTopicId !== null && activeTopic && (
        <SlideViewer 
          topicId={activeTopicId}
          topicTitle={`${activeTopic.module}: ${activeTopic.topic}`}
          hasNextTopic={activeTopicId !== data[data.length - 1].id}
          hasPrevTopic={activeTopicId !== data[0].id}
          startAtEnd={startAtEnd}
          initialSlideIndex={lastSeen?.topicId === activeTopicId && !startAtEnd ? lastSeen.slideIndex : 0}
          nextTopicIsProject={nextTopicIsProject}
          nextTopicIsNewChapter={nextTopicIsNewChapter}
          prevTopicIsNewChapter={prevTopicIsNewChapter}
          onClose={() => setActiveTopicId(null)} 
          onNextTopic={() => handleNextTopic(activeTopicId)}
          onPrevTopic={() => handlePrevTopic(activeTopicId)}
          onCompleteTopic={() => handleCompleteTopic(activeTopicId)}
          onSlideChange={(topicId, slideIndex) => setLastSeen({ topicId, slideIndex })}
        />
      )}
      <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
        {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-indigo-600 p-1.5 sm:p-2 rounded-lg shadow-sm shrink-0">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold text-sm sm:text-lg tracking-tight leading-tight">Curso de Introducción a C</h1>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 text-[10px] sm:text-sm leading-none">por</span>
                <div className="h-5 sm:h-8 flex items-center justify-center overflow-hidden" title="Logo UCAB">
                  <img src={ucabWide} alt="UCAB" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-sm font-medium text-slate-500">
              Progreso
            </div>
            <div className="w-16 sm:w-32 h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs sm:text-sm font-bold text-indigo-600 w-7 sm:w-9 text-right">{progress}%</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Plan de Estudio</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={handleStartContinue}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-sm"
            >
              <Play className="w-4 h-4 fill-current" />
              {lastSeen ? 'Continuar Curso' : 'Iniciar Curso'}
            </button>
            <a 
              href="https://github.com/alfosuag/curso-c-ucab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">Soluciones</span>
              <span className="sm:hidden">GitHub</span>
            </a>
            <button 
              onClick={handleResetProgress}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg font-medium transition-colors shadow-sm"
              title="Reiniciar progreso"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Reiniciar</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Spreadsheet Header */}
          <div className="hidden md:grid grid-cols-[auto_1fr_2fr_140px_80px] gap-4 p-4 border-b border-slate-200 bg-slate-50/80 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <div className="w-10 text-center">#</div>
            <div>Tema</div>
            <div>Descripción</div>
            <div>Progreso</div>
            <div className="text-center"></div>
          </div>

          {/* Spreadsheet Body */}
          <div className="divide-y divide-slate-100">
            {data.map((item, index) => {
              const isNewModule = index === 0 || data[index - 1].module !== item.module;
              
              return (
                <React.Fragment key={item.id}>
                  {isNewModule && (
                    <div className="bg-slate-50/80 px-4 py-3 border-y border-slate-200/60 first:border-t-0">
                      <h3 className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-indigo-500" />
                        {item.module}
                      </h3>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_2fr_140px_80px] gap-3 md:gap-4 p-4 items-center hover:bg-slate-50/50 transition-colors group">
                    <div className="hidden md:block w-10 text-center text-sm font-mono text-slate-400">
                      {item.id.toString().padStart(2, '0')}
                    </div>
                    
                    <div>
                      <div className="font-medium text-slate-900">{item.topic}</div>
                    </div>
                    
                    <div className="text-sm text-slate-500 md:truncate pr-4" title={item.description}>
                      {item.description}
                    </div>
                    
                    <div className="flex items-center justify-between md:block mt-2 md:mt-0">
                      <button 
                        onClick={() => toggleStatus(item.id)}
                        title="Haz clic en el estado para actualizar tu progreso."
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${getStatusBadgeClass(item.status)}`}
                      >
                        {getStatusIcon(item.status)}
                        {getStatusText(item.status)}
                      </button>
                      
                      {/* Mobile link button */}
                      <button 
                        onClick={() => navigateToTopic(item.id, null, false)}
                        className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                        title="Ver presentación"
                      >
                        <Presentation className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="hidden md:block text-center">
                      <button 
                        onClick={() => navigateToTopic(item.id, null, false)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                        title="Ver presentación"
                      >
                        <Presentation className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 overflow-hidden shrink-0">
              <img src={ucabSquare} alt="UCAB Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Universidad Católica Andrés Bello</p>
              <p className="text-sm text-slate-500">Escuela de Ingeniería Informática - Sede Guayana</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-slate-500">Tutor</p>
            <p className="font-medium text-slate-900">Alfonso Suarez</p>
          </div>
        </div>
      </footer>
    </div>
      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">¿Reiniciar progreso?</h3>
            <p className="text-slate-600 mb-6 text-sm">Esta acción borrará todo tu progreso actual y no se puede deshacer.</p>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setShowResetConfirm(false)} 
                className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors text-sm"
              >
                Cancelar
              </button>
              <button 
                onClick={confirmReset} 
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors text-sm shadow-sm"
              >
                Sí, reiniciar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Course Completed Credits Modal */}
      {showCreditsModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 animate-in fade-in zoom-in-95 duration-200 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">¡Curso Completado!</h2>
            <p className="text-slate-600 mb-8">Has finalizado con éxito el Curso de Introducción a C.</p>
            
            <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 overflow-hidden shrink-0">
                  <img src={ucabSquare} alt="UCAB Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Universidad Católica Andrés Bello</p>
                  <p className="text-xs text-slate-500">Escuela de Ingeniería Informática - Sede Guayana</p>
                </div>
              </div>
              <div className="border-t border-slate-200 pt-4 mt-4">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Tutor</p>
                <p className="font-medium text-slate-900">Alfonso Suarez</p>
              </div>
            </div>

            <button 
              onClick={() => setShowCreditsModal(false)}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Chapter Transition Overlay */}
      {pendingTransition && (
        <div 
          className="fixed inset-0 z-[60] bg-indigo-600 flex flex-col items-center justify-center p-4 cursor-pointer animate-in fade-in duration-300"
          onClick={skipTransition}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center tracking-tight animate-in slide-in-from-bottom-4 duration-500 mb-8">
            {pendingTransition.module}
          </h2>
          <div className="w-64 h-1.5 bg-indigo-800 rounded-full overflow-hidden">
            <div className="h-full bg-white animate-[shrink_4s_linear_forwards]" style={{ width: '100%', transformOrigin: 'left', animation: 'shrinkBar 4s linear forwards' }} />
          </div>
          <p className="text-indigo-300 text-sm mt-4">Haz clic para omitir</p>
          <style>{`
            @keyframes shrinkBar {
              from { width: 100%; }
              to { width: 0%; }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
