/**
 * Lista dos itens com os seguintes atributos:
 * - title (string): Título do item
 * - state (string): Estado visual do item, podendo ser 'success', 'info', 'warning' ou 'error'
 * - dateText (string): Texto representando a data de ocorrência do item
 * - onClick (function) - Atributo opcional que define uma ação a ser executada ao clicar no item
*/
export interface TimelineItem {
   title: string;
   dateText: string;
   state: string;
}

/**
 * Enum que representa as duas orientações possíveis para a timeline.
*/
export enum TimelineOrientation {
   HORIZONTAL = 0,
   VERTICAL = 1
}

/**
 * Enum que representa os possíveis estados dos itens da timeline.
*/
export enum TimelineState {
   SUCCESS = "success",
   INFO = "info",
   WARNING = "warning",
   ERROR = "error"
}
